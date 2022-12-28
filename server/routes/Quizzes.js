const express = require('express');
const router = express.Router();
const { Quizzes } = require("../models");

router.get("/", async (req, res) => {
    const listOfQuizzes =  await Quizzes.findAll();
    res.json(listOfQuizzes);
});

router.post("/", async (req, res) => {
    const quiz = req.body;
    await Quizzes.create(quiz);
    res.json(quiz);
})

module.exports = router