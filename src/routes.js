const { Router } = require('express')
const router = new Router
const db = require('../src/config/db.js')


router.post('/register',(req,res)=>{
    const { name, email, lastName, password } = req.body
    db('users')
        .insert({name: name, lastName, email, password})
        .then(()=>{
            return res.status(200).json({sucess: "register"})
        })
        .catch((err)=>{
            return res.status(500).json({error: err})
        })
})

module.exports = router