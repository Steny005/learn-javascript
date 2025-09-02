
let studentNames=["seira","sneha","nisha","raju"];
for (let index in studentNames){
    console.log(studentNames[index]);
}

//add elemts
studentNames.push("rajupapa");
console.log(studentNames); //[ 'seira', 'sneha', 'nisha', 'raju', 'rajupapa' ]

studentNames.pop(); // Removes the last element
console.log(studentNames); //[ 'seira', 'sneha', 'nisha', 'raju' ]

studentNames.shift(); // Removes the first element
console.log(studentNames); //[ 'sneha', 'nisha', 'raju' ]

studentNames.splice(3, 1); // Removes one element at index 1
console.log(studentNames); //[ 'sneha', 'nisha', 'raju' ]

//mapping
let upperCaseNames = studentNames.map(name => name.toUpperCase());
console.log(upperCaseNames); // [ 'SNEHA', 'NISHA', 'RAJU' ]

let longNames = studentNames.filter(name => name.length > 4);
console.log(longNames); // Output: ["sneha", "nisha"]


array = [ 1, 2, 3, 4, 5, 6 ];
 
const helperSum = (acc,curr) => acc+curr
sum = array.reduce(helperSum, 0);
 
console.log(array)
console.log(sum);


array = [ 1, 2, 3, 4, 5, 6 ];
 
const lessthanFourCheck = (element) => element < 4 ;
const lessthanFour = array.some(lessthanFourCheck)
 
 
console.log(array);
if(lessthanFour){
    console.log("At least one element is less than 4" )
}else{
    console.log("All elements are greater than 4 ")
}