import React, { useEffect, useRef } from 'react';
import './App.scss';

// import the image
import me from './images/me.webp';

// import Plugin
// this Plugin will allows us to play with sudo element in css
import CSSRulePlugin  from 'gsap/CSSRulePlugin';

// import GSAP
import { TimelineLite, Power3 } from 'gsap';


function App() {

  let container = useRef(null);
  let image = useRef(null);
  let imageReval = CSSRulePlugin.getRule('.img-container:after') // this will present the sudo element (after) for img-container

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0.5, {css: { visibility: 'visible' }}).to(
      imageReval,
      1.4,
      { width: "0%", ease: Power3.easeIn }
    ).from(
      image,
      1.4,
      {
        scale: 1.4, 
        ease: Power3.easeIn,
        delay: -1.1,
      }
    )
  }, [])

  return (
    <section className="main">
      <div 
      ref={ el => { container = el } }
      className="container">
        <>
          <div className="img-container">
            <img 
            ref={ el => { image = el } }
            src={me}/>
          </div>
        </>
      </div>
    </section>
  );
}



export default App;
