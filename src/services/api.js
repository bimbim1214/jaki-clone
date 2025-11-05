// import axios from 'axios';

// // Base URL dari Apidog (ganti dengan URL API Anda)
// const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-apidog-url.com/api';

// // Create axios instance
// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   timeout: 10000, // 10 seconds
// });

// // Request interceptor (untuk menambahkan token, dll)
// apiClient.interceptors.request.use(
//   (config) => {
//     // Tambahkan token jika ada
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor (untuk handle error)
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Handle unauthorized (redirect to login)
//       localStorage.removeItem('token');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// // ============ API SERVICES ============

// // Get all services/layanan
// export const getServices = async () => {
//   try {
//     const response = await apiClient.get('/services');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching services:', error);
//     throw error;
//   }
// };

// // Get service by ID
// export const getServiceById = async (id) => {
//   try {
//     const response = await apiClient.get(`/services/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching service:', error);
//     throw error;
//   }
// };

// // Get news/berita
// export const getNews = async (params = {}) => {
//   try {
//     const response = await apiClient.get('/news', { params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     throw error;
//   }
// };

// // Get wisata
// export const getWisata = async (params = {}) => {
//   try {
//     const response = await apiClient.get('/wisata', { params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching wisata:', error);
//     throw error;
//   }
// };

// // Get UMKM
// export const getUMKM = async (params = {}) => {
//   try {
//     const response = await apiClient.get('/umkm', { params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching UMKM:', error);
//     throw error;
//   }
// };

// // Submit pengaduan
// export const submitPengaduan = async (data) => {
//   try {
//     const response = await apiClient.post('/pengaduan', data);
//     return response.data;
//   } catch (error) {
//     console.error('Error submitting pengaduan:', error);
//     throw error;
//   }
// };

// // Auth - Login
// export const login = async (credentials) => {
//   try {
//     const response = await apiClient.post('/auth/login', credentials);
//     if (response.data.token) {
//       localStorage.setItem('token', response.data.token);
//     }
//     return response.data;
//   } catch (error) {
//     console.error('Error logging in:', error);
//     throw error;
//   }
// };

// // Auth - Register
// export const register = async (userData) => {
//   try {
//     const response = await apiClient.post('/auth/register', userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error registering:', error);
//     throw error;
//   }
// };

// // Search
// export const searchContent = async (query) => {
//   try {
//     const response = await apiClient.get('/search', {
//       params: { q: query }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error searching:', error);
//     throw error;
//   }
// };

// export default apiClient;import axios from 'axios';

// // Base URL dari Apidog (ganti dengan URL API Anda)
// const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-apidog-url.com/api';

// // Create axios instance
// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   timeout: 10000, // 10 seconds
// });

// // Request interceptor (untuk menambahkan token, dll)
// apiClient.interceptors.request.use(
//   (config) => {
//     // Tambahkan token jika ada
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor (untuk handle error)
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Handle unauthorized (redirect to login)
//       localStorage.removeItem('token');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// // ============ API SERVICES ============

// // Get all services/layanan
// export const getServices = async () => {
//   try {
//     const response = await apiClient.get('/services');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching services:', error);
//     throw error;
//   }
// };

// // Get service by ID
// export const getServiceById = async (id) => {
//   try {
//     const response = await apiClient.get(`/services/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching service:', error);
//     throw error;
//   }
// };

// // Get news/berita
// export const getNews = async (params = {}) => {
//   try {
//     const response = await apiClient.get('/news', { params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     throw error;
//   }
// };

// // Get wisata
// export const getWisata = async (params = {}) => {
//   try {
//     const response = await apiClient.get('/wisata', { params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching wisata:', error);
//     throw error;
//   }
// };

// // Get UMKM
// export const getUMKM = async (params = {}) => {
//   try {
//     const response = await apiClient.get('/umkm', { params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching UMKM:', error);
//     throw error;
//   }
// };

// // Submit pengaduan
// export const submitPengaduan = async (data) => {
//   try {
//     const response = await apiClient.post('/pengaduan', data);
//     return response.data;
//   } catch (error) {
//     console.error('Error submitting pengaduan:', error);
//     throw error;
//   }
// };

// // Auth - Login
// export const login = async (credentials) => {
//   try {
//     const response = await apiClient.post('/auth/login', credentials);
//     if (response.data.token) {
//       localStorage.setItem('token', response.data.token);
//     }
//     return response.data;
//   } catch (error) {
//     console.error('Error logging in:', error);
//     throw error;
//   }
// };

// // Auth - Register
// export const register = async (userData) => {
//   try {
//     const response = await apiClient.post('/auth/register', userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error registering:', error);
//     throw error;
//   }
// };

// // Search
// export const searchContent = async (query) => {
//   try {
//     const response = await apiClient.get('/search', {
//       params: { q: query }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error searching:', error);
//     throw error;
//   }
// };

// export default apiClient;