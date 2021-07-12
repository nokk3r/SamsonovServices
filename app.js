const express = require('express')
const config = require('config')

const app = express()

const PORT = config.get('port')

app.listen(PORT, () => console.log('App has been started at port: ' + PORT))