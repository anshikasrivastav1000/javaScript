setTimeout('console.log("hlo"); console.log("this is ans");',2000)
//use backtick for multipule line code

const timer1 = setTimeout(`console.log("hi-1")`,1000)
const timer2 = setTimeout(`console.log("hi-2")`,0)
const timer3 = setTimeout(`console.log("hi-3")`,4000)
const timer4= setTimeout(`console.log("hi-3")`,3000)
//clearTimeout(timer2)
function a(){
    console.log("this is inside")

}
console.log("this is outside")

//in this line 13 will execute first because javascript is synchronous  (code wil run line by line)
//setTimeOut is an asynchronous code(it doesn't  runimmiately it saved in memory and then run