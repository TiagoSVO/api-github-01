import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

export const getUser = async (login) => await api.get(`/users/${login}`);
export const getRepos = async (login) => await api.get(`/users/${login}/repos`);

export default api;