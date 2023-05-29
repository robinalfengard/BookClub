import axios from "axios";

export const getUsers = () => axios.get(`http://localhost:8080/api/users/list`)
export const addUser = () => axios.post(`http://localhost:8080/users/add`)
export const getMeetings = () => axios.get(`http://localhost:8080/meeting/list`)

export const getUserById = (userId) => axios.get(`http://localhost:8080/users/${userId}`);

export const getUserByName = (userName) => axios.get(`http://localhost:8080/users/get/${userName}`);