const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json())
app.use(cors())

const db = require("./models")


//! Routers
const quizRouter = require('./routes/Quizzes')
app.use("/quizzes", quizRouter)


db.sequelize.sync().then(() => {
        app.listen(2000, () => {
        console.log("Server running on port 2000")
    })
})
