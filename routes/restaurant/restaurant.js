const { application } = require('express');
const express =require('express');
const restaurantRoute=express.Router()
const app= express()
app.use(express.json());

restaurantRoute.post('/rescontact',(req,res)=>{
   
    res.send({
        msg:"hello from Restaurant contactNo.",
        contact:"89562335"
    })
})
restaurantRoute.post('/resaddress',(req,res)=>{
    res.send({
        msg:"hello from Restaurant address",
        add:"bagicha no. 12 Neemuch (m.p.)"
    })
})
restaurantRoute.post('/orderdetails',(req,res)=>{
    console.log(req.body)
    res.send({
        msg:"hello from order details",
        orderitem:req.body
    })
})
module.exports={restaurantRoute}