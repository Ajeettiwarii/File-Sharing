import express from "express";   
import router from "./routes/routes.js" 
import DBConnection from "./database/db.js";  
import cors from 'cors';
const app=express();     
app.use(cors());
app.use('/',router);
const PORT =8000;  
DBConnection();
app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));