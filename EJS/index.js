import express from "express"

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.render("index.ejs", {name : "New"})
})

app.listen(port, ()=>{

})