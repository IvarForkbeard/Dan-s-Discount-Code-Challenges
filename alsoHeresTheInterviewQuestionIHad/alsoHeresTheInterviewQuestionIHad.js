const fs = require("fs");
const streetArray = fs.readFileSync("data.txt", "utf-8").split(",");

let answer = "";

let numberOfBuildings = streetArray.length;
let tallestBuildingSoFar = 0;
let tallestBuilding = Math.max(...streetArray);

let bannerOneHeight = tallestBuilding;
let bannerOneWidth = numberOfBuildings;
let bannerOneArea = tallestBuilding * numberOfBuildings;
let bannerTwoHeight = tallestBuilding;
let bannerTwoWidth = numberOfBuildings;
let bannerTwoArea = tallestBuilding * numberOfBuildings;

let bestArea = bannerOneArea;

function updateBanners(address){
    bannerOneHeight = tallestBuildingSoFar
    bannerOneWidth = address + 1;
    bannerOneArea = bannerOneHeight * bannerOneWidth;
    bannerTwoHeight = Math.max(...streetArray.slice(address + 1, streetArray.length))
    bannerTwoWidth = numberOfBuildings - address - 1
    bannerTwoArea = bannerTwoHeight * bannerTwoWidth;
}

for (let i = 0; i < numberOfBuildings - 1; i++){

    if (streetArray[i] > tallestBuildingSoFar) {
        tallestBuildingSoFar = streetArray[i];
    }
    
    updateBanners(i);
    
    if (bannerOneArea+ bannerTwoArea < bestArea) {
        bestArea = bannerOneArea + bannerTwoArea;
    }
}

answer = "The best area we can cover is " + bestArea;
console.log(answer);