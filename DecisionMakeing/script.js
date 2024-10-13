// const username = prompt('Enter username');
// const userAge = +prompt('enter user age');

// ///pareint null ka return Nan deta hai
// //+null ka return 0 deta hai
// if(userAge >=18 && userAge <= 24){

//     console.log(`Welcome, ${username}! You are a college student.`);
    

// }else if(userAge >= 25){
//     console.log(`Welcome, ${username}! You are a working professional programmer`);
// }


const userName = prompt('Enter username' || 'unknown');
const userAge = parseInt(prompt('enter user age') || 'not mentioned');

if( userAge >+ 18 && userAge <= 24){
    console.log(`you're ${userName}eligible`)
}else if(userAge >= 25 && userAge <=45){
    console.log(`you're ${userName} working professional programmer`)
}