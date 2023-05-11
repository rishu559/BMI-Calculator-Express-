const express = require("express");
const bp = require("body-parser")
const app = express();
app.use(bp.urlencoded({extended:true}))
const port = 3000;

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/bmiCalculator.html`);
})

app.post('/bmiCalculator',(req,res)=>{
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight/(height*height);
    
    result = Math.round(result*100)/100;

    res.send(`Your BMI is ${result}`);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)});
