function changeImage() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    document.getElementById("stitch-image").src = images[currentImage];
}
