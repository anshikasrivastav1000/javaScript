//higher order function
function a(b){
   // console.log(typeof b);
    
}
// a('hey');
// a({username:'aa',password:'ghj'})
// a([1,2,3,4])

// console.log(a)
//  console.dir(a)
//  console.dir('hey')
//  console.dir(12)  

function sayHi(){
    console.log('hi')
}
// a(sayHi);
//anonymous function
//callback function
a(function(){
    console.log('hi')
})
//jab kise ek function ko dusre function me as a argument pass kiya jaata hai or baad me usko call kiya jaata hai use callback function kehte hai
//or jis function me pass kiyaa jaata hai usse highorder function kehte hai
