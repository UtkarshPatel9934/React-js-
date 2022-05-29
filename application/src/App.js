import logo from './logo.svg';
import './App.css';

// importing Functional Component
// import FunctionalComponent from './FunctionalComponent'

// import without default keyword
import {FunctionalComponent} from './FunctionalComponent'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      {/* To use FunctionalComponent in the App.js we have to make a tag name same as file name  */}
      <FunctionalComponent />
      {/* REUSE IT  */}
      {/* <FunctionalComponent /> */}


      {/* same file component */}
      <NewComponent />



    </div>
  );
}



// Create Functional Component in the same file
// this is same file component so we don't need to export or import it.
function NewComponent() { 
  return(
    <h3>Same File Component</h3>
  )
 }


export default App;




/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */