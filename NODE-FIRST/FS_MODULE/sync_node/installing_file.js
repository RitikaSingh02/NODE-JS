const fs=require("fs");
//creating a new file:
// fs.writeFileSync("created.txt","created with fs.writeFilesync_");
// fs.writeFileSync("created.txt","created with fs.writeFilesync_overwriting");//overwrites the data

// fs.appendFileSync("created.txt","\n appending this new line to my existing file");//overwrites the data

// const buffer_data=fs.readFileSync("created.txt");
// console.log(buffer_data);
{/* <Buffer 63 72 65 61 74 65 64 20 77 69 74 68 20 66 73 2e 77 72 69 74 65 46 69 6c 65 73 79 6e 63 
5f 6f 76 65 72 77 72 69 74 69 6e 67 0a 20 61 70 70 65 6e 64 69 ... 36 more bytes> */}
//buffer is a datatype which node.js has but js do not 
// so when data is shared so it is shared in packages and thes packages store binary data 
// and the datatype that stores binary data in node is buffer
// console.log(buffer_data.toString());
//created with fs.writeFilesync_overwriting
//  appending this new line to my existing file

//to rename
// fs.renameSync("created.txt","renamed.txt");
fs.renameSync("renamed.txt","created.txt");


