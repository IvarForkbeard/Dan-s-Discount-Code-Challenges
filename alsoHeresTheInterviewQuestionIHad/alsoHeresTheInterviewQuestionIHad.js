const fs = require("fs");
const streetArray = fs.readFileSync("data.txt", "utf-8").split(",");
let answer = "";
let tallestBuilding = Math.max(...streetArray);
let numberOfBuildings = streetArray.length;
let tallestBuildingSoFar = 0;
let bestArea = tallestBuilding * numberOfBuildings;
let bannerOne = [tallestBuilding, numberOfBuildings];
let bannerTwo = [tallestBuilding, numberOfBuildings];
let bestBannerOne = [tallestBuilding, numberOfBuildings];
let bestBannerTwo = [tallestBuilding, numberOfBuildings];
for (let i = 0; i < numberOfBuildings - 1; i++){
    if (streetArray[i] > tallestBuildingSoFar) {
        tallestBuildingSoFar = streetArray[i];
    }
    bannerOne = [tallestBuildingSoFar, i + 1];
    bannerTwo = [Math.max(...streetArray.slice(i + 1, streetArray.length)), numberOfBuildings - i - 1];

//    console.log("At address " + i + " the two banners required would be " + bannerOne + " and " + bannerTwo);

    if (((bannerOne[0] * bannerOne[1]) + (bannerTwo[0] * bannerTwo[1])) < bestArea) {
        bestArea = (bannerOne[0] * bannerOne[1]) + (bannerTwo[0] * bannerTwo[1]);
        bestBannerOne = [bannerOne[0], bannerOne[1]];
        bestBannerTwo = [bannerTwo[0], bannerTwo[1]];
    }
}
answer = "The best area we can cover is " + bestArea + " and that is from a banner of " + bestBannerOne[0] + "x" + bestBannerOne[1];
if (bestBannerOne[0] !== bestBannerTwo[0]) {
    answer += " and another banner of " + bestBannerTwo[0] + "x" + bestBannerTwo[1];
}
console.log(answer);