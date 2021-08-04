require('./js-freeze');

let success = 0;

Object.prototype.bad = function(){console.log('This should not run!');};
let obj = {};

try{
  obj.bad();
}catch(e){
  success++;
}

if(success < 1){
  throw new Error('Object had a function added to its prototype');
}

try{
  eval('const bad = "This should not exist!";');
}catch(e){
  success++;
}

if(success < 2){
  throw new Error('eval still exists');
}
