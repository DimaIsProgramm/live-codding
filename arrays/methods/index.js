const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input: func
// output: arr

// input: num, index (optional), arr (optional)
// output: boolean

// option 1
// function filterCallback(num) {
//   console.log('filterCallback is called ' + num);
//   return num > 5;
// }

// const filterRes = anotherNumbersList.filter(filterCallback);
// console.log(filterRes);

//option 2
// const filterRes = anotherNumbersList.filter(function (num) {
//   return num > 5;
// });
// console.log(filterRes);

// option 3
const filterRes = anotherNumbersList.filter(num => num > 5);
console.log(filterRes);

//------------map

const numbersList = [5, 0, 8, 10, -4, 50, 220];

// input: func, obj
// output: arr

//input: element
//output: modified element

const mapRes = numbersList.map(el => el * el);
console.log(mapRes);

//find
// input: func
// output: element

// input: el
// output: bolean

// option 2
// numbersList.find(el => {
//   if (el % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(findRes);

numbersList.find(el => el % 2 === 1);

console.log(findRes);

//-----------some
// input: func
// output: boolean

//------------forEach
// input: func
// output: undefined

// callback:
// input: el
// output: undefined

numbersList.forEach(el => {
  if (el < 0) {
    console.log(el);
  }
});
