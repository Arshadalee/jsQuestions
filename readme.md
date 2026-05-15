# JavaScript Collections

In JavaScript, collections are used to store multiple values together.

---

# 1. Array
# JavaScript Array Methods

This README contains commonly used JavaScript array methods with examples.

---

# 1. push()

## Explanation
Adds element at the end of array.

## Example

```javascript
let arr = [10, 20];

arr.push(30);

console.log(arr);
```

## Output

```javascript
[10, 20, 30]
```

---

# 2. pop()

## Explanation
Removes last element from array.

## Example

```javascript
let arr = [10, 20, 30];

arr.pop();

console.log(arr);
```

## Output

```javascript
[10, 20]
```

---

# 3. shift()

## Explanation
Removes first element from array.

## Example

```javascript
let arr = [10, 20, 30];

arr.shift();

console.log(arr);
```

## Output

```javascript
[20, 30]
```

---

# 4. unshift()

## Explanation
Adds element at beginning.

## Example

```javascript
let arr = [20, 30];

arr.unshift(10);

console.log(arr);
```

## Output

```javascript
[10, 20, 30]
```

---

# 5. length

## Explanation
Returns total number of elements.

## Example

```javascript
let arr = [10, 20, 30];

console.log(arr.length);
```

## Output

```javascript
3
```

---

# 6. includes()

## Explanation
Checks if value exists.

## Example

```javascript
let arr = [10, 20, 30];

console.log(arr.includes(20));
```

## Output

```javascript
true
```

---

# 7. indexOf()

## Explanation
Returns index position.

## Example

```javascript
let arr = [10, 20, 30];

console.log(arr.indexOf(30));
```

## Output

```javascript
2
```

---

# 8. reverse()

## Explanation
Reverses array elements.

## Example

```javascript
let arr = [10, 20, 30];

arr.reverse();

console.log(arr);
```

## Output

```javascript
[30, 20, 10]
```

---

# 9. sort()

## Explanation
Sorts array values.

## Example

```javascript
let arr = [40, 10, 30, 20];

arr.sort();

console.log(arr);
```

## Output

```javascript
[10, 20, 30, 40]
```

---

# 10. concat()

## Explanation
Merges arrays.

## Example

```javascript
let arr1 = [10, 20];
let arr2 = [30, 40];

let result = arr1.concat(arr2);

console.log(result);
```

## Output

```javascript
[10, 20, 30, 40]
```

---

# 11. slice()

## Explanation
Returns selected part of array.

## Example

```javascript
let arr = [10, 20, 30, 40];

console.log(arr.slice(1, 3));
```

## Output

```javascript
[20, 30]
```

---

# 12. splice()

## Explanation
Adds or removes elements.

## Example

```javascript
let arr = [10, 20, 30];

arr.splice(1, 1);

console.log(arr);
```

## Output

```javascript
[10, 30]
```

---

# 13. join()

## Explanation
Converts array to string.

## Example

```javascript
let arr = ["Java", "Python", "JS"];

console.log(arr.join("-"));
```

## Output

```javascript
Java-Python-JS
```

---

# 14. toString()

## Explanation
Converts array into string.

## Example

```javascript
let arr = [10, 20, 30];

console.log(arr.toString());
```

## Output

```javascript
10,20,30
```

---

# 15. map()

## Explanation
Transforms each element.

## Example

```javascript
let arr = [1, 2, 3];

let result = arr.map(num => num * 2);

console.log(result);
```

## Output

```javascript
[2, 4, 6]
```

---

# 16. filter()

## Explanation
Filters matching elements.

## Example

```javascript
let arr = [1, 2, 3, 4, 5];

let even = arr.filter(num => num % 2 === 0);

console.log(even);
```

## Output

```javascript
[2, 4]
```

---

# 17. reduce()

## Explanation
Combines all values into single value.

## Example

```javascript
let arr = [1, 2, 3, 4];

let sum = arr.reduce((total, num) => total + num, 0);

console.log(sum);
```

## Output

```javascript
10
```

---

# 18. forEach()

## Explanation
Loops through array elements.

## Example

```javascript
let arr = [10, 20, 30];

arr.forEach(num => {
    console.log(num);
});
```

## Output

```javascript
10
20
30
```

---

# 19. find()

## Explanation
Returns first matching element.

## Example

```javascript
let arr = [10, 20, 30, 40];

let value = arr.find(num => num > 20);

console.log(value);
```

## Output

```javascript
30
```

---

# 20. findIndex()

## Explanation
Returns index of first matching element.

## Example

```javascript
let arr = [10, 20, 30, 40];

let index = arr.findIndex(num => num > 20);

console.log(index);
```

## Output

```javascript
2
```
---

# 2. Object

## Explanation
Object stores data in key-value pair format.

## Example

```javascript
let student = {
    id: 101,
    name: "Arshad"
};

console.log(student.name);
```

## Output

```javascript
Arshad
```

---

# 3. Map

## Explanation
Map stores key-value pairs and allows any datatype as key.

## Example

```javascript
let map = new Map();

map.set(1, "Java");
map.set(2, "Python");

console.log(map.get(1));
```

## Output

```javascript
Java
```

---

# 4. Set

## Explanation
Set stores only unique values.

## Example

```javascript
let set = new Set();

set.add(10);
set.add(20);
set.add(10);

console.log(set);
```

## Output

```javascript
Set(2) {10,20}
```

---

# 5. Array map() Method

## Explanation
Used to transform each element.

## Example

```javascript
let nums = [1,2,3];

let result = nums.map(n => n * 2);

console.log(result);
```

## Output

```javascript
[2,4,6]
```

---

# 6. Array filter() Method

## Explanation
Used to filter matching values.

## Example

```javascript
let nums = [1,2,3,4,5];

let even = nums.filter(n => n % 2 === 0);

console.log(even);
```

## Output

```javascript
[2,4]
```

---

# 7. Array reduce() Method

## Explanation
Used to combine all values into one value.

## Example

```javascript
let nums = [1,2,3,4];

let sum = nums.reduce((total, n) => total + n, 0);

console.log(sum);
```

## Output

```javascript
10
```

---

# 8. forEach() Method

## Explanation
Used to loop through array elements.

## Example

```javascript
let arr = [10,20,30];

arr.forEach(value => {
    console.log(value);
});
```

## Output

```javascript
10
20
30
```