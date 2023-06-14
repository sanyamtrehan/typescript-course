"use strict";
//////////// BUILT IN GENERIC TYPES
const names = ["Sanyam", "Naveen"]; // string[]
// names[0].split(" ");
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
promise.then((data) => {
    //  data.split(" ")
});
//////////// CUSTOM GENERIC TYPES
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Sanyam" }, { age: 25 });
console.log(mergeObj.age);
function countAndPrint(element) {
    let descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
console.log(countAndPrint("Hello There!"));
console.log(countAndPrint(["Sports", "Cooking"]));
//////////// KEYOF CONSTRAINT
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: "Sanyam" }, "name"));