const fs=require("fs");
// fs.mkdirSync("./async_node");
const data=fs.readFileSync("created.txt","utf-8");
console.log(data);
//created with fs.writeFilesync_overwriting
// appending this new line to my existing file
// 😃


//to remove a file
//fs.unlinkSync("filename.txt");