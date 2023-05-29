import axios from "axios";

export const getUsers = () => axios.get(`http://localhost:8080/api/users/list`)
export const addUser = () => axios.post(`http://localhost:8080/users/add`)