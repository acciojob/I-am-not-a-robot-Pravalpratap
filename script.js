let mainContainer = document.querySelector(".container");
let imageClassNames = ["img1", "img2", "img3", "img4", "img5"];
let randomImageClass = imageClassNames[Math.floor(Math.random() * imageClassNames.length)];
imageClassNames.push(randomImageClass);

let shuffledArray = [];
let tempArray = [...imageClassNames]; // Create a temporary copy of imageClassNames

while (shuffledArray.length < 6) {
    let randomIndex = Math.floor(Math.random() * tempArray.length);
    if (tempArray[randomIndex] === null) {
        continue;
    }
    
    shuffledArray.push(tempArray[randomIndex]);
    tempArray[randomIndex] = null; // Mark this index as used by setting it to null
}

for (let className of shuffledArray) {
    let imgElement = document.createElement("img");
    imgElement.className = className;
    mainContainer.append(imgElement);
}
