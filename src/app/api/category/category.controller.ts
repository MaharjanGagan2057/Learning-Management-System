import dbConnect from "@/database/connection"
import Category from "@/database/models/category.schema"
import authMiddleware from "../../../../middleware/auth.middleware"
import { NextRequest } from "next/server"

 export async function createCategory(req:Request){
   try {

    //authorize user from middleware
    const response= authMiddleware(req as NextRequest)
    
    //connect to database
     await dbConnect()
    const{name,description}=await req.json()
    
    //check already exist or not
const existingCategory =await Category.findOne({name:name})
if (existingCategory){
    return Response.json({
        message : "Category already existed with that name !!"
    },{status:400})
}

//create category
   await Category.create({
        name :name,
        description :description

    })

    //return success response
    return Response.json({
        message:"Category created sucessfully !"
    },{
        status:201
    })

//return response
   } catch (error) {
    console.log(error)
    return Response.json({
        message:"something went wrong!"
    },
    {status:500})
    
   }
   

}


//get all category
export async function getCategory(){
await dbConnect()
    const Categories = await Category.find()
    if (Categories.length === 0) {
        return Response.json({
            message: "No Categorys found"},{
            status: 404
        })
    }
    
//return response
    return Response.json({
        data: Categories,
    
        message: "Categorys fetched successfully"},{status: 200}

)}