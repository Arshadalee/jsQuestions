# JavaScript Collections

In JavaScript, collections are used to store multiple values together.

---

# 1. Array

## Explanation
Array stores multiple values in ordered form.

## Example

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[1]);
```

## Output

```javascript
Mango
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