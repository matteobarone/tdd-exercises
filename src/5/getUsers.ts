import axios from 'axios';

export function getUsers() {
  return axios.get('https://www.mysite.com/api/users');
}
