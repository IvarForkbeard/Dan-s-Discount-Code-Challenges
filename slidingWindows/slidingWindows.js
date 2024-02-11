const data = [2, 1, 5, 1, 3, 2, 8, 9, 11, 2, 13, 0, 13, 1, 2, 0];
const length = 6;
let maximumSum = 0;
let currentSum = 0;
let answer = new Array(length);
for (let i = 0; i < data.length; i++){
    if (i > (length - 1)){
        currentSum -= data[i - length];
    }
    currentSum += data[i];
    if (currentSum > maximumSum){
        maximumSum = currentSum;
        answer = data.slice(i - length + 1, i + 1);
    }
}
console.log("Subarray with maximum sum is [" + answer + "] and the maximum sum is " + maximumSum);