const myName = 'ans'
const user ={
    firstName : jack,
    'last-Name' : hero,
    age : 12

}
console.log(user.firstName);
console.log(user['last-Name'])
console.log(user[myName]);
// Object.seal(user);
//object seal se na toh nya add kr sake or na toh na to delete kr ske
Object.freeze(user);
//object freeze se kuch change nhi kr skte obj me -------> na to add delete update

