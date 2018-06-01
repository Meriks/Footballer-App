import Axios from 'axios';


export async function getPlayers() {
  return Axios.get('http://localhost:3000/api/players')
    .then(response => response.data)
    .catch(error => {
      console.error('Something went wrong fetching players', error);
      return Promise.reject(error);
    })
}

export async function getPlayer(id) {
  return Axios.get(`http://localhost:3000/api/player/${id}`)
    .then(response => response.data.pop())
    .catch(error => {
      console.error(`Something went wrong fetching player with id: ${id}`, error);
      Promise.reject(error);
    })
}