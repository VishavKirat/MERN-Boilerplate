import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import path from 'path'
import {Contact} from './src/Route/contact'
const app = express();
const PORT = 3000;
// ********* Midllewares 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(express.static(path.join(__dir,"WHAT EVER"))    usally we call Public files here which may carry images or helper files or .css files etc. 
app.use('/',Contact()) // Routes as middlewares

//setup mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
mongoose.connection.once('open',() =>{
    console.log('You are now connected to mongoDB locally');
}).on('error',(errror)=>{
    console.error(error);
})

app.listen(PORT,()=>{
    console.log('Express is running at port 3000');
    
})