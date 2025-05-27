const http=require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page 1')
    }
    if(req.url === '/about'){
        res.end('About us page')
    }
    // res.write()
    res.end(`
        <h1>Oops!</h1>
        <p>Page not found</p>
        `)
})

server.listen(800)