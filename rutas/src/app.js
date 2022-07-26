const express = require('express');
require('dotenv').config()

const port = process.env.PORT

const app = express()


app.get('/', (req, res) => {
    res.json({
        nombre: 'Diego',
        edad: 29,
        pais: 'Colombia'
    })
})

app.post('/', (req, res) => {
    res.json([
        {
            title: 'Hacking'
        },
        {
            title: 'Musica'
        },
        {
            title: 'Coding'
        },
        {
            playtime: '01:32'
        }
    ])
})


app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})