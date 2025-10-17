import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";

 
 export async function GET(){
    dbConnect()

   await  User.create({
        email :"gaganmaharjan32@gmail.com",
        useername :"gaganmaharjan",
        googleid : "6589564562154568"
    })

    return Response.json({
        message :"you hit api route"
    })
    
 }