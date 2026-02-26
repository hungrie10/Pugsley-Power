import React from "react";
import { useEffect } from "react";
import "./Home.css";
import mascot from "./../../../public/mascot.png";
import landing from "./../../../public/landing.jpg";

function Home() {
  
  useEffect(() => {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  const moveCursor = (e) => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    setTimeout(() => {
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    }, 50); // slight delay = echo vibe
  };

  window.addEventListener("mousemove", moveCursor);

  return () => window.removeEventListener("mousemove", moveCursor);
}, []);
  

  return (
    <section id="home_page_outer">
     
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>

      <main id="home_page_inner">
        {/* <img src={mascot} alt="" id='mascot'/> */}
        <h2>Pugsley</h2>
        <p>
          Pugsley is a friendly productivity companion designed to help you
          organize your tasks, manage your time, and stay focused without the
          stress or overwhelm of traditional productivity tools.
        </p>
        <div id="home_btns">
          <button>Set Task</button>
          <button>Get a Sneak Peak</button>
        </div>
        <br />
        <img id="lnd_pge" src={landing} alt="" />
      </main>
    </section>
  );
}

export default Home;
