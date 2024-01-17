const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
   
    Product_Name:{
        type:String,
        required:true
    },
    Quantity:{
        type:String,
        required:true
    },
    Amount:{
        type:String,
        required:true
    }
   
},{timestamps:true});
module.exports = mongoose.model("sales", salesSchema);