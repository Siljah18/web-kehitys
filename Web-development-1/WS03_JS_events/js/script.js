function showTable() {
    const animal = "Tiger";
    const habitat = "Forest";
    const diet = "Carnivore";

    const table = `
        <table>
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    const tableContainer = document.querySelector("#tableContainer");
    tableContainer.innerHTML = table;
}
const exercise2Heading = document.querySelector("h2:nth-of-type(2)");

exercise2Heading.addEventListener("mouseover", function () {
    console.log("Stepped over me with a mouse!");
});
const exercise1Heading = document.querySelector("h2:nth-of-type(1)");

exercise1Heading.addEventListener("click", function () {
    exercise1Heading.style.color = "red";
    exercise1Heading.innerHTML = "Bye bye mouse!";
});
const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("focus", function () {
    status.innerHTML = "You are writing feedback.";
    feedback.style.backgroundColor = "#c1b976";
});

feedback.addEventListener("blur", function () {
    status.innerHTML = "";
    feedback.style.backgroundColor = "";
});

feedback.addEventListener("input", function () {
    const length = feedback.value.length;

    charcount.innerHTML = `${length}/200`;

    if (feedback.value.length > 0) {
        preview.innerHTML = feedback.value;
    } else {
        preview.innerHTML = "(The preview will appear here)";
    }
});

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = feedback.value.trim();
    const length = text.length;

    if (length < 10 || length > 200) {
        status.innerHTML = "Feedback must be between 10 and 200 characters.";
        status.style.color = "red";
    } else {
        feedback.value = "";
        charcount.innerHTML = "0/200";
        preview.innerHTML = "(The preview will appear here)";

        status.innerHTML = "Thank you for your feedback!";
        status.style.color = "green";
    }
});
const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function (event) {
    console.log(event);

    keyinfo.innerHTML = `
        Key: ${event.key}<br>
        Code: ${event.code}
    `;

    keybox.innerHTML = event.key;
    keybox.style.fontSize = "2em";
});