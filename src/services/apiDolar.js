import axios from 'axios';
const apiDolar = axios.create({
    baseURL:'https://economia.awesomeapi.com.br/all/USD-BRL',
})

export default apiDolar