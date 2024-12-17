let result = 0;
function change(num, result){
   result = 1;
   result = result + num;
   return result;
}
console.log('pure function')
console.log(change(2,0))
console.log(change(2,0))
console.log(change(2,0))
console.log(`global variable ${result} remains unmodified`)

function change2(num){
     result = 1;
   result = result + num;
   return result;
}
console.log('impure function')
console.log(change2(2))
console.log(change2(2))
console.log(change2(2))
console.log(change2(2))
console.log(` modified global variable ${result}`)

