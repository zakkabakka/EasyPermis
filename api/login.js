import './../config';
import axios from 'axios';

var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

var login = {
    login(data) {
        return fetch(apiUrl+'/login', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }).then((res) => res.json());
    },

    getCurrentUser() {

        return axios.get('http://sd-139380.dedibox.fr:3000/login/me')
            .then(response => {
                return response
            })
            .catch(error => {
                console.log(error.response);
            });
    }
};

module.exports = login;