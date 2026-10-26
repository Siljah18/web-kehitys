
const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");

const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercise 1 and 3: Animal form

function tallennaElain(event) {
    event.preventDefault();

    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    formResult.textContent = "";

    animalName.classList.remove("invalid");
    animalSpecies.classList.remove("invalid");
    careNote.classList.remove("invalid");

    const name = animalName.value.trim();
    const species = animalSpecies.value.trim();
    const note = careNote.value.trim();

    let valid = true;

    if (name === "") {
        nameError.textContent = "Please enter the animal's name.";
        animalName.classList.add("invalid");
        valid = false;
    }

    if (species === "") {
        speciesError.textContent = "Please enter the species.";
        animalSpecies.classList.add("invalid");
        valid = false;
    }

    if (note.length === 0) {
        noteError.textContent = "Please enter a care note.";
        careNote.classList.add("invalid");
        valid = false;
    } else if (note.length > 150) {
        noteError.textContent = "Care note must be 150 characters or fewer.";
        careNote.classList.add("invalid");
        valid = false;
    }

    if (!valid) {
        formResult.textContent = "Please correct the errors.";
        return;
    }

    const animal = {
        name: name,
        species: species,
        note: note
    };

    localStorage.setItem("ws05Animal", JSON.stringify(animal));

    formResult.textContent =
        name + " the " + species + " was added successfully!";

    naytaElain();
    animalForm.reset();
}

animalForm.addEventListener("submit", tallennaElain);


// Exercise 2: Sponsorship calculator

const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const years = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

function laskeHinta(event) {
    event.preventDefault();

    const annualFee = Number(animalType.value);
    const numberOfYears = Number(years.value);

    if (!Number.isInteger(numberOfYears) || numberOfYears < 1) {
        cost.textContent = "Please enter a positive whole number of years.";
        discountMessage.textContent = "";
        return;
    }

    let total = annualFee * numberOfYears;

    if (numberOfYears > 2) {
        total = total * 0.8;
    }

    if (numberOfYears >= 5) {
        total = total - 5;
    }

    cost.textContent = "Total: €" + total.toFixed(2);

    if (numberOfYears >= 5) {
        discountMessage.textContent =
            "20% discount and an extra €5 discount applied.";
    } else if (numberOfYears > 2) {
        discountMessage.textContent = "20% discount applied.";
    } else {
        discountMessage.textContent = "No discount applied.";
    }
}

sponsorForm.addEventListener("submit", laskeHinta);


// Exercise 4: Load and clear saved animal

const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function naytaElain() {
    const data = localStorage.getItem("ws05Animal");

    if (data === null) {
        savedAnimal.textContent = "No saved animal yet.";
        return;
    }

    try {
        const animal = JSON.parse(data);

        if (
            animal === null ||
            typeof animal.name !== "string" ||
            typeof animal.species !== "string" ||
            typeof animal.note !== "string"
        ) {
            savedAnimal.textContent = "Saved animal data is invalid.";
            return;
        }

        savedAnimal.textContent =
            "Name: " + animal.name +
            " | Species: " + animal.species +
            " | Care note: " + animal.note;

    } catch (error) {
        savedAnimal.textContent = "Could not read saved animal data.";
    }
}

loadButton.addEventListener("click", naytaElain);

function poistaElain() {
    localStorage.removeItem("ws05Animal");
    savedAnimal.textContent = "No saved animal yet.";
}

clearButton.addEventListener("click", poistaElain);

// Restore saved data when the page opens
naytaElain();
