import { request } from "express"; 
import File from "../models/file.js";


export const uploadImage=async(req,res)=>{   
    console.log(req.body)
    const fileobj={
        path:req.file.path,
        name:req.file.originalname
    }
    
    try{    
      const file= await File.create(fileobj)   
      console.log(file);
      res.status(200) 
           .json({
               path:`http://localhost:8000/file/${file._id}`
           })

    }catch(error){
        console.error(error.message);  
        res.status(500).json({error:error.message})
    }

}  
export const downloadImage=async(req,res)=>{
    try{
     const file=await    File.findById(req.params.fileId) 
     file.downloadContent++; 
     await file.save(); 
     res.download(file.path,file.name)
    //  res.sendFile(file.path)
    }catch(error){ 
        console.error(error.message) 
        return res.status(500).json({error:error.message})

    }
}