const app=require('express')();
app.get('/',(req,res)=>{
    res.json({message: "clcd g13v server running"});
})
app.listen(4000,()=>{
    console.log("server running");
})