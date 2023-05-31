import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL;

class Api {
  static get(endpoint) {
    return axios.get(`${API_URL}/${endpoint}`);
  }

  static getById(id, endpoint) {
    return axios.get(`${API_URL}/${endpoint}/${id}`);
  }
}

export default Api;