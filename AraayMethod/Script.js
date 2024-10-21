//aage se htt jae ga ek element iska use nhi krna cahiye q js ko time lgta hai isko excite krne me indx change hota hai

const arr = [1, 2 ,3 ,4,5,6,7,8,9,10,11]
const shift = arr.shift();

//unshift ye aage se add krta hai aage se jo element diya ho
const unshift = arr.unshift(-1);

//concat() ye 2 array ko add kr deta hai original array ko ko modify nhi krta
const arr2 = [ "mango" , "cat" , "rat"]

const add = arr.concat(arr2);
