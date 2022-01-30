import axios from 'axios'

axios.interceptors.request.use(async request => {
  request.headers.Accept = 'application/json';
  request.headers['Content-Type'] = 'application/json';
  return request
})

axios.interceptors.response.use(
  async response => {
    console.log('response',response);
    return response.data
  },
  async error => {
    if (error.response && error.response.status == 401 && error.config) return 'handle Unauthenticated.'
    if (error.response && error.response.status == 422 ) return 'error_422'
    else return 'error'
  }
)
