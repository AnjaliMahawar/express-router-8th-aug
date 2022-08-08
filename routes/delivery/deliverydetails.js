const express=require('express')
const deliveryRoute=express.Router();


deliveryRoute.get('/deliverydetails',(req,res)=>{
    res.json({
        msg:"hello from delivery details"
    })

})
deliveryRoute.post('/customeraddress',(req,res)=>{
    res.json({
        msg:"hello from customer address",
       
    })

})
deliveryRoute.get('/dispatchorder',(req,res)=>{
    res.json({
        msg:"hello from dispatch orders"
    })

})
module.exports={deliveryRoute}