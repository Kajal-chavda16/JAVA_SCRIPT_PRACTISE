//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor
// let fruits = new Array("apple","banana","orange");
// console.log(fruits);

//? Using array literal
// let fruits = ["apple","banana","orange"];
// console.log(fruits);

//? we can also create an empty array

// let arr = [];
// console.log(typeof arr);

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
// let fruits = ["apple","banana","orange"];
// console.log(fruits[0],fruits[1],fruits[2],fruits[3]);

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.
// let fruits = ["apple","banana","orange"];
// fruits[1] = "grapes";
// console.log(fruits);

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays

// let fruits = ["apple","banana","orange","mango","grapes"];

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

// for(let item of fruits){
//     console.log(item);
// }

// for(let item = 0 ; item < fruits.length ; item++){
//     console.log(fruits[item]);
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// for(let item in fruits){
//     console.log(item);
// }

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// fruits.forEach((curEle , index , arr) => {
//     // console.log(`${curEle} ${index}`);
//     console.log(arr);
// });

// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.


// const myMapArr = fruits.map((curEle , index , arr) => {
//     // console.log(arr);
//     return `${curEle} ${index}`;
// });
// console.log(myMapArr);
// console.log(fruits);


//todo Practice Time
//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];

// forEach -  Performs an action on each element

// numbers.forEach  ((curElem) => {
//     console.log(curElem * 2);
// });

// map -  Creates a new array with transformed elements

// const doubleValue = numbers.map  ((curElem) => {
//     return curElem * 2;
// });
// console.log(doubleValue);

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

// let fruits = ["apple","banana","orange","mango","grapes"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("guava"));
// // the push method returns the new length.
// console.log(fruits);

//? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop());
// console.log(fruits);

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("guava"));
// console.log(fruits);

//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift("guava"));
// console.log(fruits);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
// let fruits = ["apple", "orange", "banana", "mango"];

//! what if you want to add the element at the end
// console.log(typeof fruits.splice(1,1,"grapes"));
// console.log(fruits);

// fruits.splice(1,1);
// console.log(fruits);
// fruits.splice(-2,0,"grapes")
// console.log(fruits);

//todo Challenge time
// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: Update march to March (update)?
// 4: Delete June from an array?

// const months = ["Jan", "march", "April", "June", "July"];

//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(5,6));

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// console.log(numbers.indexOf(6));
// console.log(numbers.lastIndexOf(6,5));

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)

// const numbers = [1,2,3,6,4,5,6,7,8,9];
// console.log(numbers.includes(63));

//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

// const result = numbers.find((curElem) => {
//     return curElem > 6 ;
// });
// console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const result = numbers.findIndex((curElem) => {
//     return curElem > 2 ;
// });
// console.log(result);

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// const result = numbers.filter((curElem) => {
    // return curElem > 4;
// });
// console.log(result);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let updateCart = numbers.filter((curElem) => {
//     return curElem !== value ;
// });
// console.log(updateCart);

// Practice time
// !Example 2: Filtering Products by Price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];
// // Filter products with a price less than or equal to 500

// const filterProducts = products.filter((curElem) => {
//     return curElem.price <= 500 ;
// });
// console.log(filterProducts);


// //! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let uniqueValues = numbers.filter((curElem,index,arr) => {
//     // console.log(index);
//     // console.log(arr.indexOf(curElem));
//     return index === arr.indexOf(curElem);
// });
// console.log(uniqueValues);

// console.log([...new Set(numbers)]);

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// numbers.sort();
// console.log(numbers);

// numbers.sort((a,b) => {
//     if (a > b) return -1 ; // switch the order
//     if (b > a) return 1 ; // keep the order
// });
// console.log(numbers);

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

//  let result = numbers.map((curElem) => curElem * curElem );
// console.log(result);

//! first letter capitalize using map method
// const words = ["apple","cherry","banana","day"];

// let result1 = words.map((curElem) => {
//     return curElem[0].toUpperCase() ;
// });
// console.log(result1);

//! jo even number hai uska square karna hai using map method
// const numbers = [1, 2, 3, 4, 5];

// let result = numbers.map((curElem) => {
//     if(curElem % 2 === 0){
//         return curElem * curElem ;
//     }
//  }).filter((curElem) => curElem !== undefined);

// console.log(result);


//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

const productPrice = [ 100, 200 , 300 , 400 , 500 ];
const totalPrice = productPrice.reduce((accum,curEle) => {
    return accum + curEle ;
} , 0 );

console.log(totalPrice);