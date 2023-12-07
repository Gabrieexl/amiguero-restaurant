/* console.log("Hola soy un mensaje") */
const express = require("express")
const cors = require("cors")

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())

app.listen(3000,(err)=>{
    if(err) console.log("an error ocurrerd")
    console.log("server running on port 3000")
})