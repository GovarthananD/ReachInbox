import mongoose from "mongoose";

const expenceSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    amount:{
        type:String,
        required:true,
    },
    catagory:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
})

const Expence = mongoose.model("Expence", expenceSchema);
export {Expence};