// get all photos and their containers - i'll want to repeat this entire code block (lines 2 to end) for every photo-container on the page
const photoContainer1 = document.querySelector(".photo-container-1");
var photos1 = Array.from(document.querySelectorAll(".photo-container-1 .photo"));
// check for when the photo-container is clicked
photoContainer1.addEventListener("click", (e) => {
    
    // remove the first photo from the list (shift), add it to the end (push).
    const first = photos1.shift();
    photos1.push(first);

    // for each photo
    photos1.forEach((element, index) => {
        // set the z-index, left, and top fields dynamically using variables (for clarity mostly)
        const zind = index;
        const offset = 3 * index;
        element.style.zIndex = zind.toString();
        element.style.top = offset.toString() + "px";
        element.style.left = offset.toString() + "px";
    });

})

const photoContainer2 = document.querySelector(".photo-container-2");
var photos2 = Array.from(document.querySelectorAll(".photo-container-2 .photo"));
photoContainer2.addEventListener("click", (e) => {
    const first = photos2.shift();
    photos2.push(first);

    photos2.forEach((element, index) => {
        const zind = index;
        const offset = 3 * index;
        element.style.zIndex = zind.toString();
        element.style.top = offset.toString() + "px";
        element.style.left = offset.toString() + "px";
    })
})