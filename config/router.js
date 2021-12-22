const express = require('express')
const routes = express.Router()


let db = [
    {"1": { Nome: "Cliente 1", Idade: "20"  }},
    {"2": { Nome: "Cliente 2", Idade: "50"  }},
    {"3": { Nome: "Cliente 3", Idade: "70"  }},
]

// Buscar Dados
routes.get('/',(req,res) => {
    return res.json(db)
})

//Iserir Dados
routes.post('/add', (req, res) => {
    const bodys = req.body

    if(!bodys)
        return res.status(400).end()

    db.push(bodys)
    return res.json(bodys)    

    


})



routes.listen(6643,() =>{
    console.log('Express started at http://localhost:6643')
})


module.express = routes


