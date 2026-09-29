// --------------------------------------------------
// EXAMPLE 1 – ANIMAL TABLE
// --------------------------------------------------

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
});


// --------------------------------------------------
// TASK 1
// --------------------------------------------------



const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Updated heading!";
});




const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});




const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent =
        "Elephants are intelligent and social animals.";
});


// --------------------------------------------------
// TASK 2
// --------------------------------------------------

const animalContent = document.querySelector("#animalContent");



const animalHeading = document.createElement("h3");
animalHeading.textContent = "Animal of the Day";
animalHeading.classList.add("animal-heading");



const animalParagraph = document.createElement("p");
animalParagraph.textContent =
    "Elephants are the world's largest land animals. They are intelligent, social animals.";



const animalContentImage = document.createElement("img");
animalContentImage.src = "images/elephant.png";
animalContentImage.alt = "Elephant";


animalContent.append(
    animalHeading,
    animalParagraph,
    animalContentImage
);




const hideAnimalButton = document.querySelector("#hideAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
});


const showAnimalButton = document.querySelector("#showAnimalButton");

showAnimalButton.addEventListener("click", function () {
    animalContent.hidden = false;
});


// --------------------------------------------------
// TASK 3
// --------------------------------------------------

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {

    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Elephant";
        animalDescription.textContent =
            "Elephants are the world's largest land animals.";
    }

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiger";
        animalDescription.textContent =
            "Tigers are large cats with striped fur.";
    }

    if (selectedAnimal === "penguin") {
        animalName.textContent = "Penguin";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Penguin";
        animalDescription.textContent =
            "Penguins are birds that cannot fly but are excellent swimmers.";
    }

    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent =
            "Pandas are bears that mainly eat bamboo.";
    }
});




animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});



animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});


// --------------------------------------------------
// TASK 4
// --------------------------------------------------

const animalForm = document.querySelector("#animalForm");

const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");

const observationTableBody =
    document.querySelector("#observationTableBody");


animalForm.addEventListener("submit", function (event) {

    event.preventDefault();

    

    if (
        observationAnimal.value === "" ||
        observationLocation.value === "" ||
        observationDate.value === ""
    ) {
        return;
    }

   

    const newRow = document.createElement("tr");

  

    const animalCell = document.createElement("td");
    animalCell.textContent = observationAnimal.value;

    const locationCell = document.createElement("td");
    locationCell.textContent = observationLocation.value;

    const dateCell = document.createElement("td");
    dateCell.textContent = observationDate.value;

    

    newRow.append(
        animalCell,
        locationCell,
        dateCell
    );

   

    observationTableBody.append(newRow);

    

    animalForm.reset();
});