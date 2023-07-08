 import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config();

 const DBConnection=async()=>{
    try{
           await mongoose.connect(process.env.CONNECTION_URL).then(()=>console.log("database connected successfully"))
    }catch(error){ 
        console.error('Error while connecting with the database',error);

    }
}  
export default DBConnection;