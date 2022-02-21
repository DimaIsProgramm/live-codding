'use strict';

//var, let, const;
//let message = 'hello';
//console.log(message)

const numbersList1 = [1, 2, 3, 4, 5];

//pop

//input: none
//return: number
const res = numbersList1.pop();
console.log(res);

console.log('ater pop ' + numbersList1);

//push
const numbersList2 = [1, 2, 3, 4, 5];
console.log('before push ' + numbersList2);

//input: none
//return: number (new array length)

const pushRes = numbersList1.push(88);
console.log(pushRes);

console.log('ater push ' + numbersList2);

//shift
const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift ' + numbersList3);

//input:none
//output:number
console.log(numbersList3.shift());

console.log('after shift ' + numbersList3);
