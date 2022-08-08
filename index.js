//console.log('hello from anjali ')
//import area
const { application } = require('express')
const express=require('express')
const { adminRoute } = require('./routes/admin/admin')
const { customerCareRoute } = require('./routes/customercare/customercare')
const { deliveryRoute } = require('./routes/delivery/deliverydetails')
const { restaurantRoute } = require('./routes/restaurant/restaurant')

const app= express()
app.use(express.json());
require('dotenv').config()


app.use('/admin',adminRoute)
app.use('/delivery',deliveryRoute)
app.use('/customer',customerCareRoute)
app.use('/restaurant',restaurantRoute)



let port =process.env.PORT
app.listen(port,()=>{
    console.log("server is running on port "+port)
})