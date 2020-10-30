// import React from 'react'
import { data } from '../components/data'


export const services = {
    transform
}


let epoch = new Date('2016-10-11').getTime()
console.log(epoch)


function transform() {
    const assessment = data.topics
    const weekly_count = assessment[1].weekly_count - 1
    generateTasks(weekly_count)
    // data.users.forEach(user => 
    //     handleLogic(user, weekly_count)
    // )
}

function generateTasks(weekly_count) {
    const assessment = data.topics
    const users = data.users
    const offset = new Date().getTimezoneOffset()*60000;
    console.log(offset);

    const payload = users.reduce( (acc, user) => {
        return acc.concat([
            {
                name: "Weekly Goals",
                topic: `${assessment[0]._id}`,
                status: "waiting",
                date: new Date(`${assessment[0].start_day}`).getTime() + offset,
                user: `${user._id}`
            },
            {
                name: "Weekly Reflection",
                topic: `${assessment[2]._id}`,
                status: "waiting",
                date: new Date(`${assessment[2].start_day}`).getTime() + offset,
                user: `${user._id}`
            },
            ...handleAssessment(user, weekly_count)
        ])
    }, [])

    postPayload(payload)
}

function handleAssessment(user, weekly_count) {
    const assessment = data.topics
    const payload = []
    const offset = new Date().getTimezoneOffset()*60000;
    console.log(offset);
    for (let index = 0; index <= weekly_count; index++) {
        payload.push(
            {
                name: "Daily Assessment",
                topic: `${assessment[1]._id}`,
                status: "waiting",
                date: new Date(`${assessment[1].start_day}`).getTime() + offset,
                user: `${user._id}`
            }
        )
        
    }
    return payload
}

function postPayload(payload) {
    const BASE_URL = 'https://925ee3c8729541b8407aaee847ab21b6.m.pipedream.net'
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

