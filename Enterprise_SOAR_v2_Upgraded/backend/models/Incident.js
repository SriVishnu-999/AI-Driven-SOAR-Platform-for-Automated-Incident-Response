const mongoose=require("mongoose");
const IncidentSchema=new mongoose.Schema({
sourceIP:String,
user:String,
description:String,
severity:String,
vtScore:Number,
abuseScore:Number,
combinedScore:Number,
status:{type:String,default:"Open"},
createdAt:{type:Date,default:Date.now}
});
module.exports=mongoose.model("Incident",IncidentSchema);