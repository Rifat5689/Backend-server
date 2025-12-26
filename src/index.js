import mongoose  from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./database/db.js";
import dotenv from 'dotenv'
import { app } from "./app.js";
dotenv.config({ path: '.env' })



// import express from "express";
// const app = express() ; 
// ;(async()=>{
  
// try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      app.on("error" , (error)=>{
//          console.log("error",error) ;
//          throw error
//      } )
//      app.listen(process.env.PORT, () =>console.log(`app is listening on port ${process.env.PORT}`) );
// } catch (error) {
//     console.error("Error : ",error) ; 
//     throw error;
// }




// })()

connectDB() 
.then(()=> {
     const port = process.env.PORT || 4000 ; 
      app.listen(port , () =>{
          console.log('the app is listening at port ', port ) ; 
      })
})
.catch((err)=> {
      console.log('Mongodb Connection Failed !!!',err) ; 
})