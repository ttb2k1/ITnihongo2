import axios from 'axios';

const API_BASE_URL = 'http://localhost:3005/';


class ManagementService {
    getAllUser() {
        return axios.get(API_BASE_URL + "user/getallusers");
    }

    getUserByEmail(email) {
        return axios.get(API_BASE_URL + "user/getuserbyemail");
    }

    addUser(idUser) {
        return axios.post(API_BASE_URL + "user/insertuser", idUser);
    }

    updateUser(idUser) {
        return axios.put(API_BASE_URL + "user/updateuser" + idUser)
    }

    deleteUser(idUser) {
        return axios.delete(API_BASE_URL + "user/" + idUser);
    }

    getListHistory() {
        return axios.get(API_BASE_URL + "history/list");
    }

    getDetailHistory(idUser) {
        return axios.get(API_BASE_URL + "history/detail/" + idUser)
    }

    getDetailVel(idUser) {
        return axios.get(API_BASE_URL + "history/detailVeh" + idUser)
    }

    getUserByQR(idUser) {
        return axios.post(API_BASE_URL + 'user/getuserbyqr', idUser)
    }


}

export default new ManagementService();
