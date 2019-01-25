import './../config';

var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

var accompanist = {
    update(data) {
        return fetch(apiUrl+'/accompanist/me/update', {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        }).then((res) => res.json());
    },
    getSchedule() {
        return fetch(apiUrl+'/accompanist', {
            method: 'GET',
            headers: headers,
        }).then((res) => res.json());
    },
    info(accompanistId) {
        return fetch(apiUrl+'/accompanist/'+accompanistId+'/infos', {
            method: 'GET',
            headers: headers,
        }).then((res) => res.json());
    },
    myCourses(state) {
        return fetch(apiUrl+'/accompanist/my/course/'+state, {
            method: 'GET',
            headers: headers,
        }).then((res) => res.json());
    },
    studentSchedules(accompanistId) {
        return fetch(apiUrl+'/accompanist/'+accompanistId+'/schedule', {
            method: 'GET',
            headers: headers,
        }).then((res) => res.json());
    }
};

module.exports = accompanist;