//localstorage Login
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY= "username";

function onLoginSubmit(e){
    e.preventDefault();
    const username = loginInput.value;
    if(username===""){
        alert("Please write your name.");
    } else if(username.length > 10){
        alert("Your name is too long.");
    } else{
        localStorage.setItem(USERNAME_KEY, username);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreeting(username);
    }
}


function handleLinkClick(e){
    console.log(e);
    alert("Let's dive into Breathing Design!");
}
link.addEventListener("click", handleLinkClick);


function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    link.addEventListener("click", handleLinkClick);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(savedUsername);
    link.addEventListener("click", handleLinkClick); 
}





  

  