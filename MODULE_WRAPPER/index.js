//a sample of wrapper func in nodejs
(function (exports,require,module,__filename,__dirname)
{
    const a="riz";
    console.log(a);
    // module.exports={};
})();//riz
// console.log(a);//error generated as a is as private var acced by our wrapperfunction