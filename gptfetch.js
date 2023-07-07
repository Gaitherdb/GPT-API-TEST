require('dotenv').config()
const fetch = require('node-fetch');

var requestUrl = "https://api.openai.com/v1/models"


// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//     organization: "org-yDhWf7vTIfS8NkHWy9B9bzZ7",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

fetch(requestUrl, {
    headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        //Loop over the data to generate a table, each table row will have a link to the repo url

    });