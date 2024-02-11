/*

Given a string that contains only the characters: (, ), [, ], {, and }
Determine if the string is "balanced". The string is considered balanced if all of the opening parentheses are closed in the correct order.
{[()]} is considered to be balanced.
{[}] is not balanced because the parentheses are not closed in the correct order.
(] is not balanced

*/
let string = "({[()}]})";
function duckQueen(duck) {
    let stack = [];
    for (let i = 0; i < duck.length; i++) {
        if (duck.charAt(i) === "(") {
            stack.push("(");
        }
        else if (duck.charAt(i) === "{") {
            stack.push("{");
        }
        else if (duck.charAt(i) === "[") {
            stack.push("[");
        }
        else if (duck.charAt(i) === ")") {
            if (stack.pop() !== "(") {
                return false;
            }
        }
        else if (duck.charAt(i) === "}") {
            if (stack.pop() !== "{") {
                return false;
            }
        }
        else if (duck.charAt(i) === "]") {
            if (stack.pop() !== "[") {
                return false;
            }
        }
    }
    return (stack.length === 0);
}
if (duckQueen(string)) {
    console.log("It's balanced.");
}
else {
    console.log("It's NOT balanced.");
}
/*

No further commentary feels beneficial.

*/