const ratingBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn")
const rating = document.querySelector(".rating");
const card = document.querySelector("#card");
const thankYouCard = document.querySelector(".thank-you-card")

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
    })
})

submitBtn.addEventListener("click", () => {
    rating.innerHTML = selected;
    card.style.display = "none";
    thankYouCard.style.display = "flex";
})

