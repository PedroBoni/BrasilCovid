import axios from 'axios';
const apiDolar = axios.create({
    baseURL:process.env.REACT_APIDOLAR_URL,
})

export default apiDolar