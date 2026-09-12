const mongoose=require("mongoose");
const validator=require('validator');
const userSchema=new mongoose.Schema({
 firstName:{
    type:String,
    required:true,
 },
 lastName:{
    type:String,
 },
 emailId:{
    type:String,
    lowercase:true,
    required:true,
    unique: true,
    trime:true,
    validate(value){
      if(!validator.isEmail(value)){
         throw new Error("Inavalid email address:"+ value);
      }
    },
 },
 password:{
    type:String,
    required:true,
 },
 age:{
    type:Number,
 },
 gender:{
    type:String,
    validate(value){
      if(!["male","female","others"].includes(value)){
         throw new Error("Gender data is required");
      }
    },
 },
 photoUrl:{
    type:String,
 },
 about:{
    type:String,
    default:"this default about text",
 },
 skills:{
    type:[String],
 }
},
{
   timestamps:true,

}
);


module.exports=mongoose.model("User",userSchema);

