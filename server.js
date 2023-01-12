const http = require('http')



const server = http.createServer((req,res)=>{
if(req.url=='/home'){
    res.write('welcome home')
}else if(req.url=='/about'){
    res.write('welcome from about')
}else {
    res.statusCode=404
    res.write('No Found')
}
res.end()
    
})

server.listen(5000,()=>{console.log('server running')})