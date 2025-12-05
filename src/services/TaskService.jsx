import axios from "axios";

const API_URL = "https://todo-backend-zux0.onrender.com"; // <-- ajusta a tu ruta

export const getTasks = () => axios.get(API_URL);

export const createTask = (task) =>
    axios.post(API_URL, task);

export const updateTask = (id, task) =>
    axios.put(`${API_URL}/${id}`, task);

export const deleteTask = (id) =>
    axios.delete(`${API_URL}/${id}`);
