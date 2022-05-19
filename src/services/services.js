import error from "eslint-plugin-react/lib/util/error";

import axios from 'axios';

// function getContactForm() {
//     axios.get('http://localhost:3000/users')
//         .then(resp => {
//             data = resp.data;
//             data.forEach(e => {
//                 console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
//             });
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

export function setContactForm({name, email, message}) {
    // console.log("hello " + JSON.stringify(id), name, email, message)

    axios.post('http://localhost:3001/users', {
        name: name,
        email: email,
        message: message,
    }).then(resp => {
        console.log("RESP " + resp);
    }).catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
    // try {
    //     const dto = await axios.post('http://localhost:3001/users', data, {
    //         contactId: id,
    //         name: name,
    //         email: email,
    //         message: message,
    //     })
    //     const data = dto.data
    //     console.log(data)
    // } catch (err) {
    //     // eslint-disable-next-line no-console
    //     console.log(error)
    // }
}