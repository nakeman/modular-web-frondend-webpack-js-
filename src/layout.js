import './layout.css';
import Greeting from './greeting.js';

const Container = document.createElement('div');
Container.classList = "centerbox";
Container.append(Greeting);

export default Container;