const express = require('express')
const bcrypt = require('bcrypt')
const Users_auth = require('../models/UserAuth')

const userRouter = express.Router()

//  Create an endpoint to get user


userRouter.post('/', async (req, res) => {
    try{
        // const salt =  await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(
            req.body.password, 10)

        const newUser = new Users_auth ({
            username: req.body.username,
            password: hashedPassword
        })
        await newUser.save()
        res.status(201).send("Submitted")
    } catch (err) {
        res.status(500).json({message: err.message})

    }

})

// userRouter.post('/', async (req, res) => {
//     const users = new Users_auth.find
//     const user = users.find(user = user.name === req.body.name)
//     if (user == null){
//         return res.status(400).send('Cannot find user record')
//     }
//     try {
//         if( await bcrypt.compare(req.body.password, user.password)){
//             res.send("Success")
//         } else {
//             res.send("Access not allowed")
//         }
        

//     }catch{
//         res.status(500).send()
//     }
// })


module.exports = userRouter