// get all photos and their containers - i'll want to repeat this entire code block (lines 2 to end) for every photo-container on the page
const photoContainer = document.querySelector(".photo-container");
var photos = Array.from(document.querySelectorAll(".photo-container .photo"));
// check for when the photo-container is clicked
photoContainer.addEventListener("click", (e) => {
    
    // remove the first photo from the list (shift), add it to the end (push).
    const first = photos.shift();
    photos.push(first);

    // for each photo
    photos.forEach((element, index) => {
        // set the z-index, left, and top fields dynamically using variables (for clarity mostly)
        const zind = photos.length - index;
        const leftOffset = 3 * index;
        const topOffset = 3 * index;
        element.style.zIndex = zind.toString();
        element.style.top = topOffset.toString() + "px";
        element.style.left = leftOffset.toString() + "px";
    });

})