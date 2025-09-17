import mongoose from "mongoose";

const MONGODB_CS=process.env.MONGODB_CS

if(!MONGODB_CS){
    throw new Error("You must provide Mongodb Conection string")
}

const dbConnect = async()=>{
    try {
        
        await mongoose.connect(MONGODB_CS)
        console.log("Database connected sucessfully")
    } catch (error) {
        console.log("Error connecting..."error)
        
    }
}

export default dbConnect