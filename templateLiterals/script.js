const options = "hello world";
const name = "           ansi        ";
// // const she = name.trim();
// const she = name.trimStart();
const she = name.trimEnd();
//includes()
const user = "hi i'm sick"
const here = user.includes("i'm");
//indexOf()
const Has = "may June"
const Jan = Has.indexOf();

//replace()
//1 jo inistal jo hai 2 nd jis se replace krna hai
const replace = "hello hell world"
const he = replace.replace('hello' , 'hey');
const hi = replace.replace('h' , 'H');

// replaceAll()
const Hey = "hey there how are you"
const greet = Hey.replaceAll('h' ,'H');

//concat();
const Here = Hey.concat(replace);

//padStart();
const lastFour = "1234";
const Start = lastFour.padStart('12' ,'$');
//padEnd()
const End = lastFour.padEnd('10','*')

   
//charAt();
//find the index

//charCodeAt
const U = "hi there i'm ash"
const w = U.charCodeAt(3);

