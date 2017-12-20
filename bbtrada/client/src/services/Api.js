import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://burgers-weslaughter0717.c9users.io:8081/'
  })
}
