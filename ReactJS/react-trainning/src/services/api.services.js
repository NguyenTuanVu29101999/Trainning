import axios from "axios";

export const Task = {
  getAllServices() {
    return axios.get("ShippingLine/Services");
  },

  insertTask(body) {
    return axios.post("https://localhost:44353/api/Home/task/insert", body);
  },
};
