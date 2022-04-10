// Create Greeting node
import webpack_logo from './images/webpack.gif'

//////// 1 Webpack Logo image/////////
const Logo = document.createElement('img');
Logo.src = webpack_logo;
Logo.style = "width:50%";
const LogoBox = document.createElement('div');
LogoBox.append(Logo);
LogoBox.style = "text-align:center";

//////// 2 Greeting Message /////////
const Greeting = document.createElement('h1');
Greeting.textContent = '';
const box = document.createElement('div');
box.classList = "greeting";

//////// 3 User Input /////////
const userInput = document.createElement('input');

//////// 4 Submit Button /////////
const btn = document.createElement('button');
btn.innerText = "click me";
btn.onclick = hello;

/////// 5 submit event handler ////////
function hello(e){
    if(userInput.value.trim() == "") return alert("What's you name?");

    let name = userInput.value;
    Greeting.textContent = `Hello,${name} Welcome To Web world!`;
    console.log(e);
    return;
}

box.append(LogoBox);
box.append(Greeting);
box.append(userInput);
box.append(btn);
userInput.focus();


export default box;