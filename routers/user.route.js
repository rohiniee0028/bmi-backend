const express = require('express');
const { userModel } = require('../Models/user.models');

const User = express()

User.post("/login", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email, password })
        if (user == null) {
            return res.send({ "response": "Fail" })
        }
        return res.send({ "response": "Success" })
    } catch (error) {
        return res.send("Check Username and Password");
    }

})

User.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    try {
        const new_user = new userModel({
            name,
            email,
            password
        })
        await new_user.save()
        return res.send("Success")
    } catch (error) {
        return res.send(err)
    }

})

User.post("/getProfile", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email, password })
        res.send(user)
    } catch (error) {
        return res.send("Check Username and Password");
    }
})

User.post("/calculateBmi", async (req, res) => {
    const { hf, w} = req.body
     let hm = (hf/ 3.2808);
     let bmi = (w/hm);
    return res.send({bmi})
    
})

module.exports = { User }