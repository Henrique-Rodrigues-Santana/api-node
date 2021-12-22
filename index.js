const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express()


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended:false}))
app.use(express.json())
app.use(cors())

let db = [
    {"1": { Nome: "Cliente 1", Idade: "20"  }},
    {"2": { Nome: "Cliente 2", Idade: "50"  }},
    {"3": { Nome: "Cliente 3", Idade: "70"  }},
]

// Buscar Dados
app.get('/',(req,res) => {
    return res.json(db)
})

//Iserir Dados
app.post('/add', (req, res) => {
    const bodys = req.body

    if(!bodys)
        return res.status(400).end()

    db.push(bodys)
    return res.json(bodys)    

    


})



app.listen(6643,() =>{
    console.log('Express started at http://localhost:6643')
})