// import express from "express"
require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3001
const port = process.env.PORT

const gitData = {
    "login": "shibam05",
    "id": 122299216,
    "node_id": "U_kgDOB0ojUA",
    "avatar_url": "https://avatars.githubusercontent.com/u/122299216?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shibam05",
    "html_url": "https://github.com/shibam05",
    "followers_url": "https://api.github.com/users/shibam05/followers",
    "following_url": "https://api.github.com/users/shibam05/following{/other_user}",
    "gists_url": "https://api.github.com/users/shibam05/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shibam05/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shibam05/subscriptions",
    "organizations_url": "https://api.github.com/users/shibam05/orgs",
    "repos_url": "https://api.github.com/users/shibam05/repos",
    "events_url": "https://api.github.com/users/shibam05/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shibam05/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Shibam Biswas",
    "company": null,
    "blog": "",
    "location": "Kolkata",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "tweetshibam",
    "public_repos": 5,
    "public_gists": 0,
    "followers": 1,
    "following": 42,
    "created_at": "2023-01-09T16:40:29Z",
    "updated_at": "2025-04-20T08:07:28Z"
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    // res.send('You are in Home :)')
    res.json(gitData)
})

app.get('/login', (req, res) => {
    res.send('<h1 background-color: black >you should login</h1>')
})

app.get('/jokes', (req,res)=>{
    const jokes = [
        {
            "id": 1,
            "title": "Why did the scarecrow win an award?",
            "content": "Because he was outstanding in his field!"
        },
        {
            "id": 2,
            "title": "Parallel lines",
            "content": "Parallel lines have so much in common… It’s a shame they’ll never meet."
        },
        {
            "id": 3,
            "title": "Time traveler joke",
            "content": "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did."
        },
        {
            "id": 4,
            "title": "Debugging",
            "content": "Debugging: Removing the needles from the haystack."
        },
        {
            "id": 5,
            "title": "Hardware joke",
            "content": "Why don’t computers take their hats off? Because they have bad caps lock!"
        }
    ];
    res.send(jokes);
})

app.get('/api/jokelist', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Why did the scarecrow win an award?",
            "content": "Because he was outstanding in his field!"
        },
        {
            "id": 2,
            "title": "Parallel lines",
            "content": "Parallel lines have so much in common… It’s a shame they’ll never meet."
        },
        {
            "id": 3,
            "title": "Time traveler joke",
            "content": "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did."
        },
        {
            "id": 4,
            "title": "Debugging",
            "content": "Debugging: Removing the needles from the haystack."
        },
        {
            "id": 5,
            "title": "Hardware joke",
            "content": "Why don’t computers take their hats off? Because they have bad caps lock!"
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

