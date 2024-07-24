import axios from 'axios';
<<<<<<< HEAD

=======
axios.defaults.withCredentials = true;
>>>>>>> 4234846e3434671af0c13382e29076bb8682daa5
// const BASE_URL = 'https://learn-hub-backend.onrender.com/api/v1/';
const BASE_URL = 'http://localhost:5000/api/v1/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

export default axiosInstance;
