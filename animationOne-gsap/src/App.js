import React, { useEffect, useRef, useState } from 'react';
import { TweenMax, Power3 } from 'gsap'
import './App.css';



function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleYellow = useRef(null);

  const [state, setState] = useState(false);

  const handleExpend = () => {
    TweenMax.to(circle, .8, { width: 200, height: 200, ease: Power3.easeOut })
    setState(true)
  }
  const handleShrink = () => {
    TweenMax.to(circle, .8, { width: 75, height: 75, ease: Power3.easeOut })
    setState(false)
  }


  
  useEffect(() => {
    console.log(circle, circleRed, circleYellow);
    // first way to writ it :
    TweenMax.to (app, .8, { css: { visibility: 'visible' } })
    TweenMax.from(circle, .8, { opacity: 0, x: 40, ease: Power3.easeInOut })
    TweenMax.from(circleRed, .8, { opacity: 0, x: 40, ease: Power3.easeInOut, delay: .2 })
    TweenMax.from(circleYellow, .8, { opacity: 0, x: 40, ease: Power3.easeInOut, delay: .4 })
    
    
  }, [])

  return (
    <div
    ref= { el => { app = el } }
    className="App">
      <header className="App-header">
        <div className="circle-container">
          <div 
          onClick= { state !== true ? handleExpend : handleShrink}
          ref= {el => { circle = el }}
          className="circle"></div>
          <div 
          ref= { el => { circleRed = el } }
          className="circle red"></div>
          <div 
          ref = { el => { circleYellow = el } }
          className="circle yellow"></div>
        </div>
      </header>
    </div>
    
  );
}
            
          

export default App;
