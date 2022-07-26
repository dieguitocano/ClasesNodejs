const { request } = require('express');
const express = require('express');

const app = express()

const userDB = [{
    "id": 1,
    "name": "Diego",
    "age": 20,
    "email": "diego@gmail.com",
    "country": "Colombia",
    "phone": "30020"
}]

/*
  {
      id: 1,
      name: "",
      age: 20,
      email: "",
      country: "",
      phone: ""
   }
 */

app.use(express.json())


app.use('/hola', (req, res) => {
    res.json({ message: 'request with use', method: req.method })
})

//ruta para obtener todos mis usuarios
app.get('/users', (req, res) => {
    res.status(200).json(userDB)
})

//Ruta para obtener un usuario especifico
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const filteredDb = userDB.filter(item => item.id === id)

    if(filteredDb.length > 0){
        res.status(200).json(filteredDb[0])
    }else{
        res.status(400).json({message: "ID not valid"})
    }
    
})

app.post('/users', (req, res) =>{
    const data = req.body
    if(userDB.length === 0){
        const neUser = {
            id: 1,
            ...data
        }
        userDB.push(newUser)
    }else {
        const newUser = {
            id: userDB[userDB.length - 1].id + 1,
            ...data
        }
        userDB.push(newUser)
    }
    res.status(201).json(userDB)
})

app.listen(8000, () => {
    console.log('Server started at port 8000')
})

