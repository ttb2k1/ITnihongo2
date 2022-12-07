import axios from 'axios';

const BOOK_API_BASE_URL = 'http://localhost:3005/';


class ManagementService {
    getAllUser() {
        return axios.get(BOOK_API_BASE_URL + "user/getallusers");
    }

    getUserByEmail(email) {
        return axios.get(BOOK_API_BASE_URL + "user/getuserbyemail");
    }

    addUser() {
        return axios.post(BOOK_API_BASE_URL + "user/insertuser")
    }

    updateUser(idUser) {
        return axios.put(BOOK_API_BASE_URL + "user/updateuser/" + idUser)
    }

    deleteUser(idUser) {
        return axios.delete(BOOK_API_BASE_URL + "user/deleteuser/" + idUser);
    }

    getListHistory() {
        return axios.get(BOOK_API_BASE_URL + "history/list");
    }

    getDetailHistory(idUser) {
        return axios.get(BOOK_API_BASE_URL + "history/detail/" + idUser)
    }

    getDetailVel(idUser) {
        return axios.get(BOOK_API_BASE_URL + "history/detailVeh" + idUser)
    }


}

export default new ManagementService();
