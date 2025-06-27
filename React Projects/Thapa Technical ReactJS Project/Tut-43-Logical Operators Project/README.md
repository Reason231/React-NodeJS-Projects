## Short Circuit Evaluation in React.js 
- Short Circuit evaluation is a technique used in Javascript (any many other programming languages) where expressions are evaluated from left to right. 
- In logical operations, evaluation stops as soon as the result is determined. 
- This is often used in React to conditionally render components or execute code based on the truthiness of certain conditions. 


## Rules of Short Circuit Evaluation
- Short circuit evaluation involves logical operators (&&, ||, ??) and how they evaluate expressions based on the truthiness of their operands. 

- Note: In interview, they will ask if the first expression is true in OR operator, what will be the output.
1. Logical OR (||)
Syntax: expression1 || expression2
Rule: If expression1 is truthy, return expression1. Otherwise return expressions2

Example: 
const result1 = false || "Hello"  // Hello
const result2 = true || "World"  // true


2. Logical AND (&&)
Syntax: expression1 && expression2
Rule: If expression1 is falsy, return expression1. Otherwise return expressions2

Example: 
const result1 = true && "Hello"  // Hello
const result2 = false || "World"  // false


3. Nullish Coalescing (??)
Syntax: expression1 ?? expression2
Rule: If expression1 is not null or undefined, return expression1. Otherwise return expressions2

Example: 
const result1 = null ?? "Hello"        // Hello
const result2 = undefined ?? "World"   // World
const result3= "" ?? "Fallback"        // "" (It's neither null or undefined)

