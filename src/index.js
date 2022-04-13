import ReactDOM from 'react-dom';
// import hello_react from './hello-react.jsx'
import Container from "./LayoutV.jsx";

const approot = document.querySelector('#root')
// approot.append(Container)
// ReactDOM.render(<Container />,approot);
ReactDOM.render(Container(),approot);