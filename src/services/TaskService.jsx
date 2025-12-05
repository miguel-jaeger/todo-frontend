import axios from "axios";

const API_URL = "https://todo-backend-zux0.onrender.com/api/modelo"; // <-- ajusta a tu ruta

export const getTasks = () => axios.get(`${API_URL}/listar`);

export const createTask = (task) => axios.post(`${API_URL}/crear`, task);

export const deleteTask = (id) => axios.delete(`${API_URL}/eliminar/${id}`);