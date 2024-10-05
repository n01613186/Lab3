// Step 1: Declaring an Array
const numbers = [50, 60, 70, 80, 90];

// Step 2: Accessing Array Elements
const firstElement = numbers[0];
const lastElement = numbers[numbers.length - 1];
const middleElement = numbers[Math.floor(numbers.length / 2)];

console.log("First Element:", firstElement);
console.log("Last Element:", lastElement);
console.log("Middle Element:", middleElement);

// Step 3: Using Array Properties
console.log("Length of the array:", numbers.length);

// Step 4: Array Methods
numbers.push(100);
console.log("After push(100):", numbers);

// 4.2 Remove the last element from the array
numbers.pop();
console.log("After pop():", numbers);

// 4.3 Add an element to the beginning of the array
numbers.unshift(40);
console.log("After unshift(40):", numbers);

// 4.4 Remove the first element from the array
numbers.shift();
console.log("After shift():", numbers);

// 4.5 Modify an element in place
numbers[2] = 75;
console.log("After modifying index 2 to 75:", numbers);

// Step 5: Iterating Through Arrays
console.log("Iterating using for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("Iterating using forEach:");
numbers.forEach(num => {
    console.log(num);
});

// Step 6: Array Destructuring
const [first, second, ...rest] = numbers;
console.log("First two elements:", first, second);
console.log("Rest of the elements:", rest);
