import logo from './logo.svg';
import './App.css';

// Import GSAP
import { TweenMax, Power3 } from "gsap";

// The Hooks we need to use GSAP:
import { useRef, useEffect } from 'react';
{/* useRef : Refs are a function provided by React to access the DOM 
element and the React element that i might have created on my own. 
They are used in cases where we want to change the value of a child component, 
without making use of props and all 

+++ it gives a reference for which element from the dom we want +++


* When to Use Refs
  There are a few good use cases for refs:

  - Managing focus, text selection, or media playback.
  - Triggering imperative animations.
  - Integrating with third-party DOM libraries.
*/}

{/* First Step:
    we need to reference the element that we want.
    In this case the image (logo) by useing ref in the element that we want

    Second Step:
    Use useEffect to be able to effect this element
*/}


function App() {

  let logoItem = useRef(null)  
  let text = useRef(null)  

  useEffect (() => {
    console.log(logoItem);
    TweenMax.to(
      logoItem,
      .3,
      {
        opacity: 1,
        y : -20,
        ease: Power3.easeOut
      }
    )
    TweenMax.to(
      text,
      .3,
      {
        opacity: 1,
        y : -20,
        ease: Power3.easeOut
      }
    )
  }, [])

  console.log(logoItem);

  return (
    <div className="App">
      <header className="App-header">
        <img 
        ref={element => {logoItem = element} } // i made a reference to the image a funtion that set the element item as a logoitem 
        
        src={logo} className="App-logo" alt="logo" />
        <p 
        ref={element =>  {text = element}}
        >
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
      </header>
    </div>
  );
}

export default App;
