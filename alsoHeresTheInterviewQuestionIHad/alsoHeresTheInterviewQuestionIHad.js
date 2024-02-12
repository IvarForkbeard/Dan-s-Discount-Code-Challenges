const fs = require("fs");
const streetArray = fs.readFileSync("data.txt", "utf-8").split(",");

let answer = "";

let numberOfBuildings = streetArray.length;
let tallestBuildingSoFar = 0;
let tallestBuilding = Math.max(...streetArray);

let bannerOne = [tallestBuilding, numberOfBuildings, tallestBuilding * numberOfBuildings];
let bannerTwo = [tallestBuilding, numberOfBuildings, tallestBuilding * numberOfBuildings];

let bestArea = bannerOne[2];

function updateBanners(address){
    bannerOne = [tallestBuildingSoFar, address + 1, tallestBuildingSoFar * address + 1];
    bannerTwo = [Math.max(...streetArray.slice(address + 1, streetArray.length)), numberOfBuildings - address - 1, Math.max(...streetArray.slice(address + 1, streetArray.length)) * (numberOfBuildings - address - 1)];
}

for (let i = 0; i < numberOfBuildings - 1; i++){

    if (streetArray[i] > tallestBuildingSoFar) {
        tallestBuildingSoFar = streetArray[i];
    }
    
    updateBanners(i);
    
    if (bannerOne[2]  + bannerTwo[2] < bestArea) {
        bestArea = bannerOne[2] + bannerTwo[2];
    }
}

answer = "The best area we can cover is " + bestArea;
console.log(answer);