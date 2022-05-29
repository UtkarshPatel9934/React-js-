import logo from './logo.svg';
import './App.css';



// we must use this import keyword for the Class Based Component
// import statement for the Class Based Component
import React, { Component } from 'react'


// importing Functional Component
// import FunctionalComponent from './FunctionalComponent'

// import without default keyword
import {FunctionalComponent} from './FunctionalComponent'


// import Class Based Component with default keyword
// so we don't need to use like this:
// import {ClassComponent} from './ClassComponent'

import ClassComponent from './ClassComponent'



import CompWithoutJSX from './CompWithoutJSX'


function App() {

  /* Nesting Component in One Another */

  // we can nest component in one another but there are two method to use it
  // 1. {<ComponenetName>()}
  // 2. <ComponentNameGoesHere></ComponentNameGoesHere> or <ComponentNameGoesHere/>
  function NestedComonent() { 
    return(
      <h2>Nested Component</h2>
    )
   }

  /* Nesting Component in One Another */


  return (
    <div className="App">
      <h1>Hello World</h1>

      {/* To use FunctionalComponent in the App.js we have to make a tag name same as file name  */}
      <FunctionalComponent />
      {/* REUSE IT  */}
      {/* <FunctionalComponent /> */}


      {/* same file component */}
      <FunctionalComponentFromAppjs />


      {/* same file component */}
      <ClassComponentFromAppjs />



    {/* Class Based Component */}
    <ClassComponent />


    {/* Nested Component */}
    <NestedComonent/>
    {/* Nested Component */}



    <CompWithoutJSX />
    


    </div>
  );
}



// Create Functional Component in the same file
// this is same file component so we don't need to export or import it.
function FunctionalComponentFromAppjs() { 
  return(
    <h3>Same File Component - Functional Component</h3>
    )
  }
  
  
// we must use this import keyword for the Class Based Component
// import React, { Component } from 'react'
// Create Class Component in the same file
// this is same file component so we don't need to export or import it.
class ClassComponentFromAppjs extends Component
{
  render() // this is the render function which includes the return statement.
	{
		return(
			<h2>Same File Component - Class Based Component</h2>
		)
	}
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