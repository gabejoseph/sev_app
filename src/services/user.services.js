// import React from 'react'
import { data } from '../components/data'


export const services = {
    transform
}


// let epoch = new Date(`1`).getDay()
// console.log(epoch, "epoch")


function transform() {
    const assessment = data.topics
    const weekly_count = assessment[1].weekly_count - 1
    generateTasks(weekly_count)
    // data.users.forEach(user => 
    //     handleLogic(user, weekly_count)
    // )
}

function generateTasks(weekly_count) {
    const weekly_goals = data.topics[0]
    const weekly_reflection = data.topics[2]
    const users = data.users
    const offset = new Date().getTimezoneOffset()*60000;
    console.log(offset, "offset");

    const payload = users.reduce( (acc, user) => {
        return acc.concat([
            {
                name: "Weekly Goals",
                topic: `${weekly_goals._id}`,
                status: "waiting",
                date: new Date(`${weekly_goals.start_day}`) + offset,
                user: `${user._id}`
            },
            {
                name: "Weekly Reflection",
                topic: `${weekly_reflection._id}`,
                status: "waiting",
                date: new Date(`${weekly_reflection.start_day}`) + offset,
                user: `${user._id}`
            },
            ...handleAssessment(user, weekly_count)
        ])
    }, [])

    postPayload(payload)
}

function handleAssessment(user, weekly_count) {
    const daily_assessment = data.topics[1]
    const payload = []
    const offset = new Date().getTimezoneOffset()*60000;
    // console.log(data.topics[1], assessment);
    for (let index = 0; index <= weekly_count; index++) {
        payload.push(
            {
                name: "Daily Assessment",
                topic: `${daily_assessment._id}`,
                status: "waiting",
                date: new Date(`${daily_assessment.start_day}`) + offset,
                user: `${user._id}`
            }
        )
        
    }
    return payload
}

// function handleDate(start_day_init, weekly_count, hour, offset) {
//     const year = 2020
//     const month = 'October'
//     const day = start_day_init + 1
//     const hourTimeStamp = hour
//     const newDate = new Date(`${month} ${day}, ${year} ${hourTimeStamp}:00:00`).getTime() + offset
//     console.log("handleDate")
//     return newDate
// }

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
        // .then(response => response.json)
        // .then(data => {
        //     console.log(data)            
        // });
}

