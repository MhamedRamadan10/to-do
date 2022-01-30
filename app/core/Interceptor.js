import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

axios.interceptors.request.use(async request => {
  const user = await AsyncStorage.getItem('@user-data')
  if (user) request.headers.Authorization = `Bearer ${JSON.parse(user).token}`;

  request.headers.Accept = 'application/json';
  request.headers['Content-Type'] = 'application/json';
  console.log(request);
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
