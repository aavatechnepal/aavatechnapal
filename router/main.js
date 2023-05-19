// // const routes = require ('express').Router();

// const express = require('express');
// const routes = express.Router();

// const aavaUser = require ('../models/userSchema')



// routes.get('/', (req, res)=>{
//     res.render("index");
// })


// //virual learning hub
// routes.get('/virtuallearning', (req, res)=>{
//     res.render('virtuallearning');
// })
// //it services
// routes.get('/IT_Services', (req, res)=>{
//     res.render('IT_Services');
// })
// //Digital _Marketing
// routes.get('/Digital_Marketing', (req, res)=>{
//     res.render('Digital_Marketing');
// })
// //Social_Media_Management
// routes.get('/Social_Media_Management', (req, res)=>{
//     res.render('Social_Media_Management');
// })

// //register form
// routes.get('/signup', (req, res)=>{
//     res.render('signup');
// })

// //accessing data from register form 
// routes.post('/signup', async (req, res)=>{
//    try {
//     const sendData = aavaUser(req.body);
//     await sendData.save();
//     res.render('index');
    
//    } catch (error) {
//     res.status(400).send(`your form is not submitted ! ${error}`);
    
//    }
// })






// module.exports = routes;