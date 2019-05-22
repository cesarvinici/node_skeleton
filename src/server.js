/**
 * This file will run the Nodejs server on the right port
 * No adicional configuration is nedded in this file. 
 */
const app = require('./app');


app.listen(process.env.PORT || 3000, () => {  console.log(`Listening on port ${process.env.PORT || 3000} `) });