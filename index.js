const ratingBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn")
// const rating = document.querySelector(".rating");
let selected = 0;

function removeHighlight () {
    ratingBtn.forEach(elementBtn => {
        elementBtn.classList.remove("highlight");
    });
}

ratingBtn.forEach(elementBtn => {
    elementBtn.addEventListener("click", () => {
        removeHighlight();
        elementBtn.classList.add("highlight");
        selected = elementBtn.innerHTML;

        console.log(selected);
        // console.log(rating.innerHTML);
    })
})

// submitBtn.addEventListener("click", () => {
//     rating.innerHTML = selected;
    
// })

// how to display correct rating on thank you page