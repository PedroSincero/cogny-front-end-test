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

export const addProductInOrder = async (productId, addProductData) => {
  const orderId = await getOrderId();
  const orderRef = doc(db, 'orders', orderId);
  const orderSnapshot = await getDoc(orderRef);

  const orderData = orderSnapshot.data();
  const { products } = orderData;

  const productIndex = products.findIndex((product) => product.id === productId);

  if (productIndex !== -1) {
    products[productIndex] = {
      ...products[productIndex],
      ...addProductData,
      quantity: products[productIndex].quantity + 1,
    };

    await updateDoc(orderRef, { products });
    return products;
  }
  const productOrder = [...products, addProductData];
  await updateDoc(orderRef, {
    products: arrayUnion(addProductData),
  });
  return productOrder;
};

export const updateProductById = async (productId, productData) => {
  const orderId = await getOrderId();
  const orderRef = doc(db, 'orders', orderId);
  const orderSnapshot = await getDoc(orderRef);

  const orderData = orderSnapshot.data();
  const { products } = orderData;

  const productIndex = products.findIndex((product) => product.id === productId);

  products[productIndex] = {
    ...products[productIndex],
    ...productData,
  };

  await updateDoc(orderRef, { products });
  return products;
}

export const deleteProductById = async (productId) => {
  const orderId = await getOrderId();
  const orderRef = doc(db, 'orders', orderId);
  const orderSnapshot = await getDoc(orderRef);

  const orderData = orderSnapshot.data();
  const { products } = orderData;

  const productIndex = products.findIndex((product) => product.id === productId);

  products.splice(productIndex, 1);

  await updateDoc(orderRef, { products });
  return products;
};  

export const deleteOrder = async () => {
  const orderId = await getOrderId();
  const orderRef = doc(db, 'orders', orderId);

  await updateDoc(orderRef, {
    products: [],
    userId: 0,
  });
};