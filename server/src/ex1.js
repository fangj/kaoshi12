require("babel-polyfill");
var p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, "one"); 
}); 

async function u(){
  var a=await p1;
  console.log(a);
}

u();


//babel ex1.js -o ex1-output.js
//node ex1-output.js