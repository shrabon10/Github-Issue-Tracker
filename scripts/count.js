function calculateCount() {
    const count = document.getElementById("total-count");
    const parent = document.getElementById("card-container");

    count.innerText = parent.children.length;
}

calculateCount();

const spinner = document.getElementById("spinner");
const cardContainer = document.getElementById("card-container");
// startLoad
function startLoading() {
    spinner.classList.remove("hidden");
    cardContainer.classList.add("hidden");
}

function stopLoading() {
    spinner.classList.add("hidden");
    cardContainer.classList.remove("hidden");
}