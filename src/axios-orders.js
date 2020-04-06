import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burgerbuilderapp-cb817.firebaseio.com/'
})

export default instance
