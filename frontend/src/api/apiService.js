import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const signup = (data) => api.post('/users/signup', data);
export const login = (data) => api.post('/users/login', data);
export const fetchEmployees = () => api.get('/employees');
export const createEmployee = (data) => api.post('/employees', data);
export const updateEmployee = (id, data) => api.put(`/employees/${id}`, data);
export const deleteEmployee = (id) => api.delete(`/employees/${id}`);
export const searchEmployees = (query) => api.get(`/employees/search?${query}`);
export const getEmployeeById = (id) => api.get(`/employees/${id}`);
