let password = document.getElementById("pass");
let confirms = document.getElementById("conf");

password.oninput = verification;
confirms.oninput = verification;
function verification(){

    if((password.value !== "" && password.value == confirms.value) || 
    (!password.classList.contains("error") ||
    !confirms.classList.contains("error")))
    {
        password.classList.toggle("error");
        confirms.classList.toggle("error");
        password.classList.toggle("proper");
        confirms.classList.toggle("proper");
    }
}
