import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name berilishi kerak!"],
        minLength: [2, "Name uzunligi kamida 2 bo'lishi kerak!"]
    },
    price:{
        type:Number,
        required:[true, "Price berilishi kerak!"],
        default:0
    },
    count:{
        type:Number,
        required:[true, "Count berilishi kerak"],
        default:0
    },
    color:{
        type : String,
        required:false,
        minLength:[3, "Color uzunligi kamida 3 bo'lishi kerak"],
        default:"white"
    },
    brend:{
        type:String,
        required:false
    }
},{
    _id:true,
    timestamps:true,
    collection:"products"
});

export const product = mongoose.model("products", productSchema);