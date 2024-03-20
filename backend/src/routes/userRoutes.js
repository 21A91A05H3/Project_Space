const express =require('express')
const Router=express.Router();
const UserController =require('../controllers/userController');
Router.post("/api/add-user",UserController.AddUserData);
module.exports=Router;