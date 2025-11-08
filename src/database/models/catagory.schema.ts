import mongoose,{Schema} from "mongoose"; 

interface ICatagory extends Document{

    name :string, 
    description?: string,
    createdAt : Date
}
const catagorySchema= new Schema<ICatagory>({
    
        name :{
        type :String,
        required :true,
        unique : true
    },
    description : String,
    createdAt :{
        type :Date,
        default :Date .now()}
    
})

const Category = mongoose.models.Category || mongoose.model("Category",catagorySchema)
export default Category