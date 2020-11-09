const fs=require("fs");
const http =require("http");
const server=http.createServer();

server.on("request",(req,res)=>{
    const readable_stream=fs.createReadStream("content.txt");
    // readable_stream.on("data",(chunk)=>{
    //     res.write(chunk);
    // });
    // readable_stream.on("end",()=>{
    //     res.end();
    // });
    // readable_stream.on("error",(err)=>{
    //     console.log(err);
    //     res.end("file not found");
    // });
    
    //2 way by piping:
    readable_stream.pipe(res);

});

server.listen(8001,"localhost");