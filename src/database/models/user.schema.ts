import mongoose from "mongoose";

const Schema = mongoose.Schema


const userSchema = new Schema({


    useername :{
        type : String
    },

    email : {
        type :String
    },

    googleid :{
        type : String
    },

    profileimage : {
        type : String 

    }

})


 const User = mongoose.model("User",userSchema)
 export default User