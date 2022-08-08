//import area
const express = require('express')
const adminRoute=express.Router();

adminRoute.get('/getproduct',(req,res)=>{
    res.json({
        msg:"hello from getproducrt"
    })
})
adminRoute.get('/getorders',(req,res)=>{
    res.json({
        msg:"hello from getorders"
    })
})
adminRoute.get('/getdetails',(req,res)=>{
    res.json({
        msg:"hello from getdetails"
    })
})
module.exports={adminRoute}