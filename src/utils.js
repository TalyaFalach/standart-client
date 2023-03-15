import axios from "axios";
const url = "http://localhost:8000";

const getById = async (token, userId) => {
  if (token) {
    const { data } = await axios.get(`${url}/users/${userId}`);
    return data;
  }
};

const getUserPosts = async (token, userId) => {
  const { data } = await axios.get(`${url}/posts/${userId}`);
  return data;
};

const login = async (email, password) => {
  const { data } = await axios.post(`${url}/users/login`, { email, password });
  return data;
};

const signUp = async (obj) => {
  const { data } = await axios.post(`${url}/users/signup`, obj);
  return data;
};

const getAllSales = async () => {
  const { data } = await axios.get(`${url}/sales`);
  return data;
};

const createNewSale = async (obj) => {
  const { data } = await axios.post(`${url}/sales`, obj);
  return data;
};

const DeleteSale = async (prodId) => {
  const { data } = await axios.delete(`${url}/sales/${prodId}`);
  return data;
};

const EditSale = async (prodId, obj) => {
  const { data } = await axios.patch(`${url}/sales/${prodId}`,obj);
  return data;
};

export {
  getById,
  getUserPosts,
  login,
  signUp,
  getAllSales,
  createNewSale,
  DeleteSale,
  EditSale,
};
