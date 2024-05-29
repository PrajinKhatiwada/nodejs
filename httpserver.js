
const {console}= require('console');

const http= require('http');
const port =process.env.PORT|| 3000;

const server =http.createServer((req, res)=>{
    res.statusCode=200;
    console.log(req.url)
    res.setHeader('Content-Type','text/html')
    res.end('<h1>HeLLO its me Prajin Khatiwada, </h1><br><p> A passionate mernstack developer from Nepal.</p>');

});

server.listen(port,()=>{
    console.log('Server is listening on port $(port)')
})