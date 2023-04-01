import axios from "axios";

export default function usersRequest() {
  const basesUrl = 'https://randomuser.me/api/';
  return axios.get(basesUrl)
    .then(response => {
      return response.data.results[0];
    });
}


