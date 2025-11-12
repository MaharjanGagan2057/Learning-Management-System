
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Role } from "@/database/models/user.schema"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

//check if user is authenticated,logged in before accessing certain routes

 const authMiddleware = async(req:NextRequest) => {
    const session = await getServerSession(authOptions)

    // If no session exists, return unauthorized
   if(!session || session.user.role !== Role.Admin){
    return  Response.json({message : "Unauthorized,you dont have permision for this action"},
       {status :401})
   } 

   return NextResponse.next()
 }

 export default authMiddleware