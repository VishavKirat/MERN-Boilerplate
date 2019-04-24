import express from 'express'
import path from 'path'
const Router = express.Router();
export const routes = () =>{
    Router
        .get('/Contact',(req,res)=>{
            res.render('contact',{
                content:'<i>hello</i>'
            })
        })
        .get('/',(req,res)=>{
            res.render('index')
        })

    return Router;
}