const mongoose= require('mongoose')
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true})
.then(()=>{console.log("connect")}).catch((err)=>{
    console.log(err)
}) 