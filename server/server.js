const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json())
app.use(cors())

const db = require("./models")


//! Routers
const quizRouter = require('./routes/Quizs')
app.use("/quizzes", quizRouter)
const questionRouter = require('./routes/Questions')
app.use("/questions", questionRouter)
const userRouter = require('./routes/Users')
app.use("/auth", userRouter)


db.sequelize.sync().then(() => {
        app.listen(2000, () => {
        console.log("Server running on port 2000")
    })
})
