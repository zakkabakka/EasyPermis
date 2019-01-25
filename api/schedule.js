import './../config';

var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

var schedule = {
    add(data) {
        return fetch(apiUrl+'/accompanist/schedule/add', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }).then((res) => {
            console.log(res);
            res.json()
        });
    },
    update(scheduleId, data) {
        return fetch(apiUrl+'/accompanist/schedule/'+scheduleId+'/update', {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data)
        }).then((res) => res.json());
    },
    delete(scheduleId, data) {
        return fetch(apiUrl+'/schedule/'+scheduleId+'/delete', {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify(data)
        }).then((res) => res.json());
    },
    request(scheduleId, data) {
      return fetch(apiUrl+'/schedule/'+scheduleId+'/rdv/request', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
      }).then((res) => res.json());
    }
};

module.exports = schedule;