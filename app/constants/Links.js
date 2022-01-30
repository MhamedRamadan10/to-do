
const API_URL = `https://api-nodejs-todolist.herokuapp.com`

const USER_SERVICE = `${API_URL}/user`

const user = {
  login: `${USER_SERVICE}/login`,
  register: `${USER_SERVICE}/register`,
}

export default {
  user,
}
