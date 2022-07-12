import axios from "axios";

const instance = axios.create({
  baseURL: "https://rahuldevconnector.herokuapp.com/",
});

export default instance;