const express = require('express');

const app = express()


app.get('/hola', (request, response) => {
    response.send('<h1>Hola Mundo</h1>')
})



app.listen(8000, () => {
    console.log('Server started at port 8000')
})