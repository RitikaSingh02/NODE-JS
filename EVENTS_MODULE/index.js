const EventEmitter=require("events");
const fs=require("fs");
console.log(typeof(fs));//object
console.log(typeof(EventEmitter));//function
const event=new EventEmitter();
console.log(typeof(event));//object

event.on("random",()=>{
    console.log("random");
})
event.emit("random");