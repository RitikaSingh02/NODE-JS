const fs=require("fs");

// fs.writeFile("read.txt","LET THE GAME BEGIN😆",)
//code: 'ERR_INVALID_CALLBACK'
//so in  async mode we need to call that function again and again to maintain the property of 
//asynchronous
fs.writeFile("read.txt","LET THE GAME BEGIN😆",
(err) => {
    console.log("file has been created");
    // console.log(err); err :error
});


//err is an argument to callback func:: a func that is passed as an argument in a function
//the syntax is as per ES2020

fs.readFile("read.txt","utf-8",
(err,data)=>
{   
    console.log(data);
    console.log(err);
})

//to make a directory/folder
fs.mkdir("new",(err)=>
{
    console.log("folder created");
})
// to remove a directory
fs.rmdir("new",(err)=>
{
    console.log("folder deleted");
})
//this works only if do not have any file in that flder lieu u have to unsynv the link first
//then delete it