import React from 'react'
import { data } from '../components/data'


export const services = {
    transform
}

const topics = data.topics

function transform() {
    data.users.map(user => {
        handleLogic(user)
    })
}

function handleLogic(user) {
    topics.map(topic => {
        return {
            name: "Weekly Goals",
            topic: `${topic._id}`,
            status: "waiting",
            user: `${user._id}`
        }
    })
}

function postPayload() {

}

// const BASE_URL = 'https://rails-vision-backend.herokuapp.com'

// function login(email, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//     };

//     return fetch(`${BASE_URL}/sessions`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));

//             return user;
//         });
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 // location.reload(true);
//             }
//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }
//         console.log(data)
//         return data;
//     });
// }