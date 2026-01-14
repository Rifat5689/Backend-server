import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
const uploadCloudinary = async(localPath) =>
{
      try {
         if(!localPath) return null ;
         const response = await cloudinary.uploader.upload(localPath,
         
            {
             resource_type:'auto'
         })
         return response ; 
      }
      catch(err) 
      {
         fs.unlinkSync(localPath) ;
         console.log(err) ; 
         return null ; 
      }

      
}