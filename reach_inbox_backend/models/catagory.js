import mongoose from "mongoose";

const catagorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
})

const Catagory = mongoose.model("Catagory", catagorySchema);
export {Catagory};