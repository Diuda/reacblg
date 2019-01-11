
import  axios  from "axios";

const root = "http://localhost:4200/api/products";

export default class APILayer {
    static getAll() {
        return axios.get(root);
    }

    static getById(payload) {
        return axios.get(`${root}/${payload.pid}`);
    }

    static add(payload) {
        return axios.post(root, payload);
      //   return axios;
    }

    static edit(payload) {
        return axios.put(`${root}/${payload.pid}`, payload);
    }

    static delete(payload) {
        return axios.delete(`${root}/${payload.pid}`);
    }
}