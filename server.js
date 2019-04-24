import express from 'express';
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import ejs from 'ejs'
import {routes} from './api/routes/index.js'
const app = express();
const PORT = 3000;
app.use((req,res,next)=>{
    console.log(`${req.method}: has been request at URL : ${req.url}`)
    next();
})
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use('/',routes());
app.listen(PORT,()=>{
    try {
        console.log(`You are listening to PORT: ${PORT}`)
    } catch (error) {
        console.error(error)
    }
})
