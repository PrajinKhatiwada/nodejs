
const http = require('http');
const fs=require('fs');
const port =process.env.PORT|| 3000;

const server =http.createServer((req, res)=>{
    
    
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    console.log(req.url)
    if(req.url=='/'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
        
    }
    else if(req.url=='/about') {
        res.statusCode=200;
        res.end('<h1>HeLLO its me Prajin Khatiwada</h1><br><p> A passionate mernstack developer from Nepal.</p>');
    }
   else{
    res.statusCode=404;
    res.end('<h1>NoT Found</h1>')

   }
});

server.listen(port,()=>{
    console.log('Server is listening on port');
});