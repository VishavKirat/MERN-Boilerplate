import express from 'express'
import {addContactToDb,getAllContact,getSpecificContact} from '../Controller/contactDbController'
let Router = express.Router();
export const Contact = () =>{
    Router
        .get('/contact',getAllContact)
        .get('/contact/:id',getSpecificContact)
        .post('/contact',addContactToDb)
        .put('/contact/:id',(req,res)=>{
            res.send(`You are listening to ${req.method}`)
        })
        .delete('/contact/:id',(req,res)=>{
            res.send(`You are listening to ${req.method}`)
        })
    return Router;
}
