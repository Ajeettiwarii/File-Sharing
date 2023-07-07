 import mongoose from 'mongoose'
 const DBConnection=async()=>{
    try{
           await    mongoose.connect("mongodb://localhost:27017",{
                dbName:"Server"
              }).then(console.log("databse connected successfully"))
    }catch(error){ 
        console.error('Error while connecting with the database',error.message);

    }
}  
export default DBConnection;