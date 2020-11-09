const fs=require("fs");
const data={
    "root":"riz",
    "os":"linux",
    "kernel":"zen",
    "version":"5.9.1"
}

const json=JSON.stringify(data);
fs.writeFile("jsondata.json",json,(err,data)=>
{
    console.log("created the json file");
});
fs.readFile("jsondata.json",'utf-8',(err,data)=>
{
    const json_data=JSON.parse(data);
    console.log(json_data);
})
