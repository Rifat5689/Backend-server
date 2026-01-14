import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHander } from "../utils/asyncHandler.js";






const registerUser = asyncHander(async(req,res) =>{
      
   //get user details 
   //validation 
   //check if user already exists or not 
   //check for image , avatar 
   //upload them to cloudinary
   //create user object - create entry db
   //remove password and refresh token field from response 
   //check for user creation 
   // return response 
   const {fullName,email,username,password} = req.body ; 


   if(
    [fullName,email,username,password].some((field)=> typeof field!="string" || field?.trim()=="")
   
   )
    {
        throw new ApiError(400,"All field are required") ;
         
    }

    const existedUser = await username.findOne({
        $or :[{username},{email}] 
    })
    if(existedUser) {
         throw new ApiError(409, "user with email or username already exists ") ; 

    }

    const avatarLocalPath = req.files?.avatar?.[0]?.path ; 
    let coverImagePath   = req.files?.coverImage?.[0]?.path;
    if(!avatarLocalPath) {
         throw new ApiError(400,"Avatar file is required") ; 
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath) ; 
    if(!avatar) 
    {
         throw new ApiError(400,"Failed upload") ; 
    }

    if(coverImagePath) 
    {
             const  converImage = await uploadOnCloudinary(coverImagePath) ; 

    }

    const user = await User.create({
         fullName,
         email,
         username:username.toLowerCase(),
         password,
         avatar:avatar.url,
         coverImage:coverImage?.url || ""
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    return res.status(201).json(
        new ApiResponse(201,createdUser,"User registered successfully") 
    )
    
    

    
   

    
})

export {registerUser} 