const app = require('./app')
const db = require('../src/config/db.js')

const Db = db()
app.listen(3000)