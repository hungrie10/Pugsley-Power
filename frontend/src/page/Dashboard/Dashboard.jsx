import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Pointer from "./../../component/Pointer"
import { faLightbulb, faMeh } from "@fortawesome/free-regular-svg-icons";
import "./Dashboard.css";

function Dashboard() {
  return (
    <section id="dashboard_outer">
      
      <Pointer />

      <section id="dashboard_inner">
        
        <header>
          <div id="circles">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>

          <nav>
            <li>
              <FontAwesomeIcon icon={faGear} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLightbulb} />
            </li>
            <li>
              <FontAwesomeIcon icon={faMeh} />
            </li>
          </nav>
        </header>

        <main id="main_page">
          
          <aside id="aside-1">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </aside>

          <aside id="aside-2">
            <div class="house"></div>
            <div class="house"></div>
          </aside>
        </main>


      </section>
    </section>
  );
}

export default Dashboard;
