const username = prompt('Enter username');
const userAge = prompt('enter user age');


if(userAge >=18 && userAge <= 24){

    console.log(`Welcome, ${username}! You are a college student.`);
    

}else if(userAge >= 25){
    console.log(`Welcome, ${username}! You are a working professional programmer`);
}