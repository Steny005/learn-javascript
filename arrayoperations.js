/* Shallow vs Deep Copy in JS
❌ Problem with Shallow Copy
let arr1 = [1, 2, 3];
let arr2 = arr1; // same reference
arr2.push(4);

console.log(arr1); // [1, 2, 3, 4] → changed!


Arrays/objects are reference types.

Direct assignment makes both variables point to the same memory.

Any change in one affects the other.

✅ Ways to Properly Copy Arrays (Shallow copy, new memory)

Spread Operator

let arr2 = [...arr1];


For Loop

let arr2 = [];
for (let x of arr1) arr2.push(x);


Array.from

let arr2 = Array.from(arr1);


concat

let arr2 = arr1.concat();

📝 Summary

Shallow Copy → just copies reference; original and copy are linked.

Deep Copy → fully independent copy.

Use ..., Array.from(), concat() for safe shallow copies (good enough for arrays of primitives).

For nested objects/arrays → need deep copy (e.g., JSON.parse(JSON.stringify(obj)), libraries like Lodash).
*/

/*var str = 'It iS a 5r&e@@t Day.'
var array = str.split(" ",2);
print(array);
Output: In this example, the function split() creates an array of strings by splitting str wherever ” ” occurs. The second argument 2 limits the number of such splits to only 2.

[It,iS]

*/