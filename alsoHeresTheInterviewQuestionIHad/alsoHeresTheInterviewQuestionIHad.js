const fs = require("fs");
const streetArray = fs.readFileSync("data.txt", "utf-8").split(",");

const streetArraySorted = streetArray.sort(function (a, b) {
    return a - b;
});

let numberOfBuildings = streetArray.length;

let tallestBuildingSoFar = 0;
let tallestBuilding = Math.max(...streetArray);

let bannerOneHeight = 0;
let bannerOneWidth = 0;
let bannerOneArea = tallestBuilding * numberOfBuildings;
let bannerTwoHeight = 0;
let bannerTwoWidth = 0;
let bannerTwoArea = 0;

function findBestArea() {
    let bestAreaInFunction = bannerOneArea;
    for (let i = 0; i < numberOfBuildings - 1; i++) {
        if (streetArray[i] > tallestBuildingSoFar) {
            tallestBuildingSoFar = streetArray[i];
        }

        bannerOneHeight = tallestBuildingSoFar;
        bannerOneWidth = i + 1;
        bannerOneArea = bannerOneHeight * bannerOneWidth;
        bannerTwoHeight = Math.max(...streetArray.slice(i + 1, streetArray.length));
        bannerTwoWidth = numberOfBuildings - i - 1;
        bannerTwoArea = bannerTwoHeight * bannerTwoWidth;

        if (bannerOneArea + bannerTwoArea < bestAreaInFunction) {
            bestAreaInFunction = bannerOneArea + bannerTwoArea;
        }
    }
    return bestAreaInFunction;
}

let bestArea = findBestArea();
let answer = "The best area we can cover is " + bestArea;
console.log(answer);
