import './../config';

var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

var register = {
    signup(data) {
        return fetch(apiUrl+'/register', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }).then((res) => res.json());
    }
};

module.exports = register;