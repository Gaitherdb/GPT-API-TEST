// const inquirer = require('inquirer');
// const fetch = require('node-fetch');

// const getAPI = async () => {
//     try {
//         const res = await inquirer.prompt({
//             type: 'input',
//             name: 'question',
//             message: 'What is your question?',
//         });

//         const data = await fetch(``);
//         const json = await data.json();
//         console.log(json);
//     } catch (error) {
//         console.log("ERROR: " + error.message);
//     }
// }

// getAPI();

const inquirer = require('inquirer');
const fetch = require('node-fetch');
require('dotenv').config()

const getAPI = async () => {
    try {
        const res = await inquirer.prompt({
            type: 'input',
            name: 'question',
            message: 'What is your question?',
        });

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                // replace with your OpenAI API Key
            },
            body: JSON.stringify({
                'model': 'gpt-3.5-turbo',
                "messages": [{ "role": "system", "content": "You are japanese tour guide" },
                { "role": "user", "content": res.question }],
                "temperature": 0.7,

            }),
        });

        const data = await response.json();
        console.log(data.choices[0].message);
    } catch (error) {
        console.log("ERROR: " + error.message);
    }
}

getAPI();