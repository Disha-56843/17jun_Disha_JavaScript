let check = document.querySelector("#check")
let password = document.querySelector("#password");
check.addEventListener("click", () => {
    let type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

})