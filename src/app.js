const express = require('express')
const router = require('./routes')


class App {
    constructor(){
        this.server = express()
        this.database;
        this.middleware()
        this.router()
    }
    middleware(){
        this.server.use(express.json())
        //this.server.use(express.urlencoded({extends: true}))
    }
    router(){
        this.server.use(router)
    }
}
module.exports = new App().server