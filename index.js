import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import reciperoute from './Routers/RecipeRouter.js';

dotenv.config();

const app= express();

app.use(cors());

app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).send("Welcome to backend")
})


app.use('/api/recipe',reciperoute)



const port =process.env.PORT||5000;


app.listen(port,()=>{
    console.log("server conected and running on the port");
    
})