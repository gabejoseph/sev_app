import React from 'react'
import { data } from '../components/data'


export const services = {
    transform
}

const assessment = data.topics
const weekly_count = assessment[1].weekly_count
const payload = []
const BASE_URL = 'https://925ee3c8729541b8407aaee847ab21b6.m.pipedream.net'

console.log(payload)

function transform() {
    data.users.map(user => {
        handleLogic(user)
    })
}

function handleLogic(user) {
    payload.push(
        {
            name: "Weekly Goals",
            // topic: `${topic._id}`,
            status: "waiting",
            user: `${user._id}`
        },
        handleAssessment(user),
        {
            name: "Weekly Reflection",
            // topic: `${topic._id}`,
            status: "waiting",
            user: `${user._id}`
        }
    )
    postPayload(payload)
}

function handleAssessment(user) {
    for (let index = 0; index < weekly_count; index++) {
        payload.push(
            {
                name: "Daily Assessment",
                // topic: `${topic._id}`,
                status: "waiting",
                user: `${user._id}`
            }
        )
        
    }
}

function postPayload(payload) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };

    return fetch(`${BASE_URL}/sessions`, requestOptions)
        .then(response => response.json)
        .then(data => {
            console.log(data)            
        });
}

