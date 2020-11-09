// Portable Operating System Interface (POSIX)//most linux and unix apis follow POSIX considerations!1

const path=require("path");

console.log(path.dirname("NODE-FIRST/PATH_MODULE/index.js").split(path.sep));
//in POSIX : PATH.SEP IS "/"
//while in windows : "\"

console.log(path.extname("NODE-FIRST/PATH_MODULE/index.js"));//.js
console.log(typeof(path.extname("NODE-FIRST/PATH_MODULE/index.js")));
console.log(path.extname("NODE-FIRST/PATH_MODULE"));//do not gives any error instead a null string is passed

console.log(path.basename("NODE-FIRST/PATH_MODULE/index.js"));//index.js
console.log(path.parse("NODE-FIRST/PATH_MODULE/index.js"));//an object
console.log(typeof(path.parse("NODE-FIRST/PATH_MODULE/index.js")));//an object


console.log(process.env.PATH);
console.log(typeof(process.env.PATH));//string
console.log(process.env.PATH.split(path.delimiter));
// Provides the platform-specific path delimiter:
// ; for Windows
// : for POSIX


