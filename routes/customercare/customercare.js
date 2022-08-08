const express =require('express');
const customerCareRoute=express.Router()

customerCareRoute.get('/contactnumber',(req,res)=>{
    res.send({
        msg:"hello from customer care contactNo.",
        contact:"89562314"
    })
})
customerCareRoute.get('/address',(req,res)=>{
    res.send({
        msg:"hello from customer address",
        add:"bagicha no. 12 Neemuch (m.p.)"
    })
})
module.exports={customerCareRoute}