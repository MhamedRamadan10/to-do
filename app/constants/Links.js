
const API_URL = `https://api-nodejs-todolist.herokuapp.com`

const USER_SERVICE = `${API_URL}/user`
const TODO_SERVICE = `${API_URL}/task`

const user = {
  login: `${USER_SERVICE}/login`,
  register: `${USER_SERVICE}/register`,
}

const task = {
  task: `${TODO_SERVICE}`,
  edit: (id)=> `${TODO_SERVICE}/${id}`
}

export default {
  user,
  task
}
