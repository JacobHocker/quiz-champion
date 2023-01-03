const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");



router.post("/", async (req, res) => {
    const { username, password, bio, avatar, country, bronzeCrown, silverCrown, goldCrown, platinumCrown} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
            bio: bio,
            avatar: avatar,
            country: country,
            bronzeCrown: bronzeCrown,
            silverCrown: silverCrown,
            goldCrown: goldCrown,
            platinumCrown: platinumCrown,
        })
        res.json("Success")
    })
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: {username: username}});

    if (!user) res.json({ error: "User does not exist!"})

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong Username and Password combination!"})

        res.json("You have been logged in.")
    })
});

module.exports = router