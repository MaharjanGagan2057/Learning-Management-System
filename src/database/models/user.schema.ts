import mongoose from "mongoose";

const Schema = mongoose.Schema

enum Role{
    student ="student",
    Admin ="admin"
}

interface IUser extends Document{
    username : string,
    profileImage :string,
    email : string,
    role : Role
}
const userSchema = new Schema<IUser>({
    username :{
        type : String,
        required :true
    },

    email : {
        type :String,
        required : true
    },
    
    role :{
        type :String,
        enum :[Role.student,Role.Admin],
        default : Role.student
    },


    profileImage : {
        type : String,

    }

})


 const User = mongoose.models.User|| mongoose.model("User",userSchema)
 export default User