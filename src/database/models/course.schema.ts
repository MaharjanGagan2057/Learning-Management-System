import mongoose,{Schema} from "mongoose";
import { title } from "process";

interface ICourse extends Document{
    title : string,
    description :string,
    price :number,
    duration : string,
    catagory : mongoose.Types.ObjectId,
    lessons : mongoose.Types.ObjectId[],
    createdAt : Date
}

const courseSchema = new Schema({

    title :{
        type : String,
        required : true
    },

    description :{
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    duration : {
        type : String,
        required : true
    },

    catagory :{
        type : Schema.Types.ObjectId,
        ref : "catagory"
    },

    lessons : [{

        type : Schema.Types.ObjectId,
        ref : "lessons"
    }],
    createdAt : {
        type :Date,
        default : Date.now()
    }


})
//
const Course = mongoose.models.Course || mongoose.model("Course",courseSchema)
export default Course