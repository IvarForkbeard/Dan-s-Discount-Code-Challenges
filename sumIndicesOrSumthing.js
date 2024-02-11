let dataArray = [2,5,9,11,13];
const target = 11;
let pointer001 = 0;
let pointer002 = dataArray.length -1;
if ((target < (dataArray[0] + dataArray[1])) || (target > (dataArray[dataArray.length - 2] + dataArray[dataArray.length -1]))){
    console.log("[-1, -1]"); // don't even get started if it's obviously not possible.
    return;
}
while ((dataArray[pointer001] + dataArray[pointer002] !== target)){
    if (dataArray[pointer001] + dataArray[pointer002] > target) {
        pointer002--;
    }
    if (dataArray[pointer001] + dataArray[pointer002] < target){
        pointer001++;
    }
    if (pointer001> pointer002 || pointer002 < pointer001){
        console.log("[-1, -1]");
        return;
    }
}
console.log("[" + pointer001 + ", " + pointer002 + "]");