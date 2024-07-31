import { app } from '../../config/firebaseConfig';
import { userType } from '@/constants';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore/lite';

const db = getFirestore(app);

async function getUsersService() {
  try {
    const usersCol = collection(db, 'users');
    const userSnap = await getDocs(usersCol);
    const users = userSnap.docs.map(doc => doc.data());
    return users;
  } catch (error) {
    throw error;
  }
}

async function getUserService(id: string) {
  try {
    const userCol = doc(db, 'users', id);
    const userSnap = await getDoc(userCol);
    const user = userSnap.data();
    return user;
  } catch (error) {
    throw error;
  }
}

async function createUserService(data: userType) {
  try {
    const userCol = collection(db, 'users');
    const userDocRef = doc(userCol);
    data.id = userDocRef.id;
    const user = await setDoc(userDocRef, data);
    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUserService(id: string, data: userType) {
  try {
    // Filter out undefined values from the data object
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined),
    );

    const userDocRef = doc(db, 'users', id);
    const user = await updateDoc(userDocRef, filteredData);
    return user;
  } catch (error) {
    throw error;
  }
}

async function deleteUserService(id: string) {
  try {
    const userDocRef = doc(db, 'users', id);
    await deleteDoc(userDocRef);
    return true;
  } catch (error) {
    throw error;
  }
}

export {
  getUsersService,
  getUserService,
  createUserService,
  updateUserService,
  deleteUserService,
};
