// Create Greeting node
import React from 'react'
import react_logo from './images/react.png'

export function GreetingV(prop){
    let [count, setData] = React.useState(0);
    let increase = () =>{
        setData(++count);
    }
    return (
        <div id="box" className="greeting">
            <div id="logobox" >
                <img alt="logo" src={react_logo} className="logo"/>
            </div>
            <h1>Welcome to {prop.name} {count} times!!</h1>
            <input/>
            <button onClick={increase}>Click me</button>
        </div>
    )
}
// //////// 1 Webpack Logo image/////////
// const Logo = document.createElement('img');
// Logo.src = webpack_logo;
// Logo.style = "width:50%";
// const LogoBox = document.createElement('div');
// LogoBox.append(Logo);
// LogoBox.style = "text-align:center";
//
// //////// 2 Greeting Message /////////
// const Greeting = document.createElement('h1');
// Greeting.textContent = '';
// const box = document.createElement('div');
// box.classList = "greeting";
//
// //////// 3 User Input /////////
// const userInput = document.createElement('input');
//
// //////// 4 Submit Button /////////
// const btn = document.createElement('button');
// btn.innerText = "click me";
// btn.onclick = hello;
//
// /////// 5 submit event handler ////////
// function hello(e){
//     if(userInput.value.trim() == "") return alert("What's you name?");
//
//     let name = userInput.value;
//     Greeting.textContent = `Hello,${name} Welcome To Web world!`;
//     console.log(e);
//     return;
// }
//
// box.append(LogoBox);
// box.append(Greeting);
// box.append(userInput);
// box.append(btn);
// userInput.focus();
// export default box;