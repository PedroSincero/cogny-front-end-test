import { arrayUnion, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import db from '../config/firebaseConfig';

export const getAllOrders = async () => {
  const querySnapshot = await getDocs(collection(db, 'orders'));
  const result = querySnapshot.docs.map((item) => item.data());
  return result;
};

export const getOrderId = async () => {
  const ordersSnapshot = await getDocs(collection(db, 'orders'));
  const orderIds = ordersSnapshot.docs.map((item) => item.id);
  return orderIds[0];
};

export const addProductToOrder = async (newProduct) => {
  const orderId = await getOrderId();
  const orderRef = doc(db, 'orders', orderId);

  try {
    await updateDoc(orderRef, {
      products: arrayUnion(newProduct),
    });
    console.log('Produto adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar produto: ', error);
  }
};

export const updateProductInOrder = async (productId, updatedProductData) => {
  const orderId = await getOrderId();
  const orderRef = doc(db, 'orders', orderId);
  const orderSnapshot = await getDoc(orderRef);

  if (orderSnapshot.exists()) {
    const orderData = orderSnapshot.data();
    const { products } = orderData;

    // Localiza o índice do produto que queremos atualizar
    const productIndex = products.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
      // Atualiza os campos do produto desejado
      products[productIndex] = {
        ...products[productIndex],
        quantity: products[productIndex].quantity + updatedProductData.quantity,
      };
      // Atualiza o array `products` no Firestore
      await updateDoc(orderRef, { products });
    }
    return { products };
  }
  return null;
};
