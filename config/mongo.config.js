const mongoose = require('mongoose')
const options = {
     useNewUrlParser: true,
    
 }

 module.exports = async (URL) => {
     try{
     mongoose.connect(URL, options);
     console.log(`connected to ${URL}`);
 } catch (error) {
     throw new error (error.message) 
 }
 }