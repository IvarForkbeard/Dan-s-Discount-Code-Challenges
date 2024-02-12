const fs = require("fs");
const buildings = fs.readFileSync("data.txt", "utf-8").split(",");

function bestArea(streetArray) {
    let numberOfBuildings = streetArray.length;

    let tallestBuildingSoFar = 0;
    let tallestBuilding = Math.max(...streetArray);
    let tallestBuildingRemaining = tallestBuilding;

    let bannerOneHeight = 0;
    let bannerOneWidth = 0;
    let bannerOneArea = tallestBuilding * numberOfBuildings;
    let bannerTwoHeight = 0;
    let bannerTwoWidth = 0;
    let bannerTwoArea = 0;

    let bestAreaInFunction = bannerOneArea;

    for (let i = 0; i < numberOfBuildings - 1; i++) {
        if (streetArray[i] > tallestBuildingSoFar) {
            tallestBuildingSoFar = streetArray[i];
        }

        if ((streetArray[i] = tallestBuildingRemaining)) {
            tallestBuildingRemaining = Math.max(...streetArray.slice(i + 1, streetArray.length));
        }

        bannerOneHeight = tallestBuildingSoFar;
        bannerOneWidth = i + 1;
        bannerOneArea = bannerOneHeight * bannerOneWidth;
        bannerTwoHeight = tallestBuildingRemaining;
        bannerTwoWidth = numberOfBuildings - i - 1;
        bannerTwoArea = bannerTwoHeight * bannerTwoWidth;

        if (bannerOneArea + bannerTwoArea < bestAreaInFunction) {
            bestAreaInFunction = bannerOneArea + bannerTwoArea;
        }
    }
    return bestAreaInFunction;
}

console.log("The best area we can cover is " + bestArea(buildings));
