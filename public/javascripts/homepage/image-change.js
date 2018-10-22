function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("homepage-images-0").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("homepage-images-0").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "images/website-background.jpg";
images[1] = "images/homepage-image.png";