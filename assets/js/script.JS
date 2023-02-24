document.addEventListener("DOMContentLoaded", init);
function init() {
    document.querySelector("form").addEventListener("submit",
        processForm);
}
function processForm(e) {
    e.preventDefault();

    const naam = document.querySelector("#naam").value;
    const para = document.querySelector("p");
    para.innerHTML = "Welkom " + naam;
}
