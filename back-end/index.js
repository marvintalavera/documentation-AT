// DEPENDENCIES
require('dotenv').config()
const PORT = process.env.PORT
const express= require('express')
const app = express()
const cors = require('cors')
const { Sequelize } = require('sequelize')
const path = require("path")

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public', 'build')));

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)



// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'public', 'build')));
}



// CONTROLLERS

const destinationsController = require('./controllers/destinations_controller')
app.use('/destinations', destinationsController)

const continentsController = require('./controllers/continent_controllers')
app.use('/continents', continentsController)

//404 Page
app.get('*', (req,res) => {
    res.send('404') // we can add page for this later
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
  

module.exports = app;