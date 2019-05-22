/**
 * You can define your routes here 
 * for post routes use 'routes.post'
 * 
 */

const routes = require('express').Router();
const HomeController = require('./app/controllers/HomeController');





//Define your open routes here!
routes.get('/', HomeController.home)



//Define your closed routes here




module.exports = routes