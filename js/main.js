// Reference 
// https://javascript.plainenglish.io/how-to-create-a-dark-mode-with-sass-scss-and-vanilla-javascript-e1c7835cf474
// https://codesandbox.io/s/scss-dark-mode-stage3-ug2w0i?from-embed=&file=/src/styles.scss

const btn = document.querySelector(".btn-toggle");
const body = document.body;
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


const addDarkMode = () => {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
}

const addLightMode = () => {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
}

const toggleTheme = () => {
    !body.classList.contains("dark-mode") ? addDarkMode() : addLightMode();
}

const checkPreference = () => {
    prefersDarkScheme.matches ? addDarkMode() : addLightMode();
}

btn.addEventListener("click", toggleTheme);
prefersDarkScheme.addEventListener("change", checkPreference);
(() => checkPreference())();