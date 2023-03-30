import axios from "axios";
import { toast } from "react-toastify";
const url = "http://localhost:8000";

const getTodayDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = dd + "/" + mm + "/" + yyyy;

  return formattedToday;
};

const getById = async (userId) => {
  const { data } = await axios.get(`${url}/users/${userId}`);
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

const deletePost = async (path, postId) => {
  const { data } = await axios.delete(`${url}/${path}/${postId}`);
  return data;
};

const editPost = async (path, postId, obj) => {
  const res = await axios.patch(`${url}/${path}/${postId}`, obj);
  return res;
};

const EditSale = async (prodId, obj) => {
  const { data } = await axios.patch(`${url}/sales/${prodId}`, obj);
  return data;
};

const createNewComment = async (obj) => {
  const res = await axios.post(`${url}/comments`, obj);
  return res;
};

const getPostComments = async (postId) => {
  const res = await axios.get(`${url}/comments/${postId}`);

  return res;
};

const addLike = async (path, postId, obj) => {
  const res = await axios.patch(`${url}/${path}/${postId}/like`, obj);
  return res;
};
const removeLike = async (path, postId, userId) => {
  //unlike
  const obj = { userId };
  const res = await axios.patch(`${url}/${path}/${postId}/unlike`, obj);
  return res;
};

const getAll = async (path) => {
  const res = await axios.get(`${url}/${path}`);
  return res;
};

const updateUser = async (userId, obj) => {
  const res = await axios.patch(`${url}/users/${userId}`, obj);
  return res;
};

const getAllUserPosts = async (userId) => {
  const salesRes = await axios.get(`${url}/sales/${userId}/all`);
  let userSales = [...salesRes.data.data.sales];

  const articlesRes = await axios.get(`${url}/articles/${userId}/all`);

  let userArticles = articlesRes.data.data;

  return { userSales, userArticles };
};

const create = async (path, obj) => {
  const res = await axios.post(`${url}/${path}`, obj);
  return res;
};

const successToast = (toast, message) => {
  return toast.success(`${message}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const errorToast = (toast, message) => {
  return toast.error(`${message}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const createNewArticle = async (obj) => {
  const res = await axios.post(`${url}/articles`, obj);
  return res;
};

export {
  getById,
  login,
  signUp,
  getAllSales,
  createNewSale,
  deletePost,
  EditSale,
  getTodayDate,
  createNewComment,
  getPostComments,
  successToast,
  errorToast,
  addLike,
  removeLike,
  getAll,
  createNewArticle,
  editPost,
  getAllUserPosts,
  updateUser,
  create,
};
