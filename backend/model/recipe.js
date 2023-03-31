const mongoose = require('mongoose')
const details = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
    ,
    image:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    foodtype:{
        type:String,
        required:true,
    },
    
    recipe:{
        type:String,
        required:true,
    },
    video:{
        type:String,
        required:true,
    },
    serving:{
        type:Number,
        required:true,
    },
    ingredient:[
        {
            ingredientName:{
                type:String
            }
        }
    ]
})

const Details=mongoose.model("recipe",details)
 module.exports=Details