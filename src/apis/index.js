
import { axios } from 'axios';

const root = "localhost:4200/api/products";

export default class APILayer {
    static getAll() {
        return axios.get(root);
    }

    static getById(payload) {
        return axios.get(`${root}/${payload.pid}`);
    }

    static add(payload) {
        return axios.post(root, payload);
    }

    static edit(payload) {
        return axios.put(`${root}/payload.pid`, payload);
    }

    static delete(payload) {
        return axios.delete(`${root}/${payload.pid}`);
    }
}