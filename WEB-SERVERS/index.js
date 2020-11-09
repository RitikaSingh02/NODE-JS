const http =require("http");
const fs=require("fs");
const path=require("path");
console.log(http.STATUS_CODES);
console.log(http.METHODS);
const server=http.createServer((request,response)=>
{   
    console.log(request.url)
    if(request.url=="/itsme")
        response.end("RESPONSE GENERATED");
    else{
        response.writeHead(404,{"Content-type":"text/html"});
        // response.sendFile('index.html');
        
        fs.readFile("index.html",(err,data)=>{
            console.log("yes");
            if(err)
                response.write("nothing to display");
            else{
                response.write(data);
                response.end();//its necessary to pass this here coz its aync so if this func is not executed
                //first then the outer response.end() may execute first,so just avoid that
            }
        });
    }
}
);

server.listen(8001,"localhost",()=>
{   
    console.log("listening to the port 8001");//use 8000 priority bases
});
