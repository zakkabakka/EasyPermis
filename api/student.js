import './../config';
import axios from 'axios';

var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

var student = {
    update(data) {
        return fetch(apiUrl+'/student/me/update', {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        }).then((res) => res.json());
    },
    mapAccompanist() {
        return fetch(apiUrl+'/student/find/accompanist', {
            method: 'GET',
            headers: headers,
        }).then(res => res.json() );
    },
    mapAccom() {
        return axios.get('http://localhost:3000/student/find/accompanist')
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error.response);
            });
    },
    info(studentId) {
        return fetch(apiUrl+'/student/'+studentId+'/infos', {
            method: 'GET',
            headers: headers,
        }).then((res) => res.json());
    },
    myCourses(state) {
        console.log('OK');
        return fetch(apiUrl+'/student/my/course/'+state, {
            method: 'GET',
            headers: headers,
        }).then((res) => {
            console.log(res);
            res.json()
        });
    }
};

module.exports = student;