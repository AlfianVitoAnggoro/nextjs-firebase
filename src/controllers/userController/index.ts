import { userType } from '@/constants';
import {
  getUsersService,
  getUserService,
  createUserService,
  updateUserService,
  deleteUserService,
} from './userService';

async function getUsers() {
  try {
    const users = await getUsersService();
    return users;
  } catch (error) {
    throw error;
  }
}

async function getUser(id: string) {
  try {
    const user = await getUserService(id);
    return user;
  } catch (error) {
    throw error;
  }
}

async function createUser(data: userType) {
  try {
    const user = await createUserService(data);
    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUser(id: string, data: userType) {
  try {
    const user = await updateUserService(id, data);
    return user;
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id: string) {
  try {
    const status = await deleteUserService(id);
    return status;
  } catch (error) {
    throw error;
  }
}

export { getUsers, getUser, createUser, updateUser, deleteUser };
