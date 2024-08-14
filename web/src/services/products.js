import { collection, getDocs } from 'firebase/firestore';
import db from '../config/firebaseConfig';

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  const result = querySnapshot.docs.map((doc) => doc.data());
  return result;
};

export const getProductById = async () => {
  // delete product
};

