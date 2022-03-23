const http =require('http')
// req(request) and res(response) are objects
const server = http.createServer((req,res)=>{ 

    if(req.url === '/')
    res.end('home page')

    if(req.url === '/about')
    res.end('About page')
    
    
    res.end('Errror yaara ')
  
    // res.write('server is not running') // it will show this messgae 
    //while accessing server via localhost:8000 
    // res.end();
})

server.listen(8000); // server port set