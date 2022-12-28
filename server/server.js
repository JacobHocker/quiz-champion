const express = require("express");
const app = express();

app.use(express.json())

const db = require("./models")


//! Routers
const quizRouter = require('./routes/Quizzes')
app.use("/quizzes", quizRouter)


db.sequelize.sync().then(() => {
        app.listen(2000, () => {
        console.log("Server running on port 2000")
    })
})
