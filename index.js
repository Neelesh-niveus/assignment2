const express=require('express');
const app=express();

app.use(express.json());

app.get('/api/:user',(req,res)=>{
    //console.log(req.params);
    const pathparams=req.params.user;
    //console.log(req.query);
    const reqParams={
        id:req.query.id,
        password:req.query.password,
    }
    //console.log(reqParams);
    const info={
        pathparam:pathparams,
        requestParam:reqParams,
    }
    res.send(info);
    res.end();

})

app.post('/api/:user',(req,res)=>{
    //console.log(req.body);
    const arrayData=Object.entries(req.body);
    console.log(arrayData);
    //res.send(JSON.stringify(arrayData));
    res.json(arrayData);
    
})

app.listen(5000,()=>{
    console.log("server running in port number 5000");
})