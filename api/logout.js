import './../config';

var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

var logout = {
    logout() {
        return fetch(apiUrl+'/logout', {
            method: 'POST',
            headers: headers
        }).then((res) => res.json());
    }
};

module.exports = logout;