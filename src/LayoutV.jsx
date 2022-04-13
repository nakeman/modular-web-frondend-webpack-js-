import React from "react";
import './layout.css';
import {GreetingV} from './GreetingV.jsx';

function Container(){
    return(
        <div className="centerbox"><GreetingV name="Web World"/></div>
    )
}

// const Container = document.createElement('div');
// Container.classList = "centerbox";
// Container.append(Greeting);

export default Container;