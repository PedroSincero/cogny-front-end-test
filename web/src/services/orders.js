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

export const updateProductInOrder = async (productId, updatedProductData) => {
  const orderId = await getOrderId();
  const orderRef = doc(db, 'orders', orderId);
  const orderSnapshot = await getDoc(orderRef);

  const orderData = orderSnapshot.data();
  const { products } = orderData;

  const productIndex = products.findIndex((product) => product.id === productId);

  if (productIndex !== -1) {
    products[productIndex] = {
      ...products[productIndex],
      ...updatedProductData,
      quantity: products[productIndex].quantity + 1,
    };

    await updateDoc(orderRef, { products });
    return products;
  }
  const productOrder = [...products, updatedProductData];
  await updateDoc(orderRef, {
    products: arrayUnion(updatedProductData),
  });
  return productOrder;
};

export const deleteOrder = async () => {
  const orderId = await getOrderId();
  const orderRef = doc(db, 'orders', orderId);

  await updateDoc(orderRef, {
    products: [],
    userId: 0,
  });
};