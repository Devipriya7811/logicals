// 1.Write a program that takes an array of elements and counts the occurrences of each
// element using a Map.
function countElement(arr){
    const countMap = new Map();
    for (const element of arr){
        if(countMap.has(element)){
            countMap.set(element,countMap.get(element)+1);
        }else{
            countMap.set(element,1);
        }
    }
    return countMap;
}
const inputArray = [1,2,3,4,5,5,5,6,2,2,2,1,4,4,3,];
const occurrencesCount = countElement(inputArray);

occurrencesCount.forEach((count,element)=>{
    console.log(`${element} occurs ${count} times`);
});

console.log(`-------------------`)

// 2. Write a program that takes an array of integers and a target sum. Check if there exists a
// subarray with the given sum using a Set.
function subarraySum(nums,targetSum){
    const numSet = new Set();
    let currentSum = 0;
    for(let num of nums){
        currentSum += num;
        if(currentSum === targetSum || numSet.has (currentSum - targetSum)){
            return true;
        }
        numSet.add(currentSum);
    }
    return false;
}
const Array = [1, 4, 20, 3, 10, 5];
const target = 33;
const output = subarraySum(Array,target);

if (output){
    console.log(`True`);
}else{
    console.log(`False`);
}
console.log(`-------------------`)

// 3.Write a program that takes an array of strings and groups anagrams together using a
// Map.
// function groupsAnagram(string){
//     const anagram = new Map();
//     string.forEach(str =>{
//         const sortedStr = str.split('').sort().join('');
//         if (anagram.has(sortedStr)){
//             anagram.get(sortedStr).push(str);
//         }else{
//             anagram.set(sortedStr,[str]);
//         }
//     });
//     return Array.from(anagram.values());
// }
// const Input = ["eat","tea","tan","ate","nat","bat"];
// const Output = groupsAnagram(Input);
// console.log(Output);

// 4.Write a program that takes an array of strings and reverses each string in the array
// using the array methods.
function reverseArray(arr) {
    const reversedArray = arr.map(str => str.split('').reverse().join(''));
    return reversedArray;
}
const stringArray = ["apple","banana","orange"];
const reversedArray = reverseArray(stringArray);
console.log(reversedArray);
console.log(`-------------------`)

// 5. Write a program that takes an array of numbers and filters out the perfect square
// numbers using the array methods.
function perfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}
function filterSquares(arr) {
    return arr.filter(num => perfectSquare(num));
}
const numbers = [1,2,3,4,5,4,9,16,25];
const perfectSquares = filterSquares(numbers);

console.log("Original Elements:", numbers);
console.log("Perfect Squares:", perfectSquares); 
console.log(`-------------------`)

// 6.Write a program that takes two objects and merges them into a single object
const obj1 = { name: "Grace", age: 25 };
const obj2 = { occupation: "Engineer", city: "Delhi" };

function mergingSingle(obj1, obj2) {
    const merged = { ...obj1, ...obj2 };
    return merged;
}

const merged = mergingSingle(obj1, obj2);
console.log(merged);
console.log(`-------------------`)

// 7 Write a program that takes an array of objects and converts it into a single object using
// Object.assign() and Object.entries().
const arr = [
    { key: "name", value: "Rocky" },
    { key: "age", value: 30 },
    { key: "city", value: "London" }
];

const convertedToObject = arr.reduce((result, properties) => {
    result[properties.key] = properties.value;
    return result;
}, {});

console.log(convertedToObject);
console.log(`-------------------`)

// 8.Write a program that takes a function with an array parameter and destructure the array
// inside the function.
function displayArray([first, second, ...rest]) {
    console.log(`First Element: ${first}`);
    console.log(`Second Element: ${second}`);
    console.log(`Rest Elements: ${rest}`);
}

const destructureTheArray = [1, 2, 3, 4, 5];
displayArray(destructureTheArray);
console.log(`-------------------`)

// 9. Write a program that takes a nested object containing numeric values and calculates
// the sum of all values.
function NestedObject(obj) {
    let sum = 0;
    function traverseSum(currentObj) {
        for (const key in currentObj) {
            if (typeof currentObj[key] === 'object') {
                traverseSum(currentObj[key]);
            } else if (typeof currentObj[key] === 'number') {
            sum += currentObj[key];
        }
        }
    }
traverseSum(obj);
return sum;
}
const nestedObj = {
    a: 1,
    b: 2,
    c: { d: 3, e: { f: 4 } },
};
const OutputOftotalSum = NestedObject(nestedObj);
console.log('Sum:', OutputOftotalSum);  
console.log(`-------------------`)

// 10. Write a program that takes an object and counts the occurrences of each property
function countProperty(obj) {
    const Counting = {};
    for (const property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (Counting.hasOwnProperty(property)) {
                Counting[property]++;
            } else {
                Counting[property] = 1;
            }
        }
    }
    return Counting;
}
const obj = {
    name: "John",
    age: 30,
    city: "New York",
    profession: "Engineer"
};

const countTheOccurences = countProperty(obj);
console.log(countTheOccurences);
console.log(`-------------------`)