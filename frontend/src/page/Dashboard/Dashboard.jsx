import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import Pointer from "./../../component/Pointer";
import { faLightbulb, faMeh } from "@fortawesome/free-regular-svg-icons";
import "./Dashboard.css";
import avatar from "./../../assets/avatar.png";

function Dashboard() {
  const the_date = new Date();
  const day_in_numbers = the_date.getDay();

  let day_in_words;

  switch (day_in_numbers) {
    case 0:
      day_in_words = "Sunday";
      break;
    case 1:
      day_in_words = "Monday";
      break;
    case 2:
      day_in_words = "Tuesday";
      break;
    case 3:
      day_in_words = "Wednesday";
      break;
    case 4:
      day_in_words = "Thursday";
      break;
    case 5:
      day_in_words = "Friday";
      break;
    case 6:
      day_in_words = "Saturday";
      break;
    default:
      day_in_words = "Unknown Day";
  }

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
            {/* Pugsley says hello 👋 */}
            <div className="box greeting">
              {/* Greets based on the day of the week */}
              <div id="day_of_the_week">
                <h2>It's {day_in_words}</h2>
              </div>

              <div id="days_message">
                <p id="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  commodi quos deserunt reiciendis quis id.
                </p>
              </div>

              <div id="control_btn">
                <button>Pomodoro</button>

                <button>Set Task</button>
              </div>
            </div>

            {/* This part displays a calendar */}
            <div className="box calendar">
              <div id="calendar_prt1">
                {/* Calendar Caption */}
                <span id="cal_cap">
                  <h2>Calendar</h2>

                  <div id="calendar_controls">
                    <button></button>
                    <button></button>
                  </div>
                </span>

                <p>February</p>
              </div>

              <div id="calendar_num">
                <span className="number">1</span>
                <span className="number">2</span>
                <span className="number">3</span>
                <span className="number">4</span>
                <span className="number">5</span>
                <span className="number">6</span>
                <span className="number">7</span>
                <span className="number">8</span>
                <span className="number">9</span>
                <span className="number">10</span>
                <span className="number">11</span>
                <span className="number">12</span>
                <span className="number">13</span>
                <span className="number">14</span>
                <span className="number">15</span>
                <span className="number">16</span>
                <span className="number">17</span>
                <span className="number">18</span>
                <span className="number">19</span>
                <span className="number">20</span>
                <span className="number">21</span>
                <span className="number">22</span>
                <span className="number">23</span>
                <span className="number">24</span>
                <span className="number">25</span>
                <span className="number">26</span>
                <span className="number">27</span>
                <span className="number">28</span>
                <span className="number">29</span>
                <span className="number">30</span>
                <span className="number">31</span>
              </div>
            </div>

            {/* This part let's u create an avatar */}
            <div className="box avatar">
              <h2>Create an Avatar</h2>
              <img src={avatar} alt="" />
              <button>
                <FontAwesomeIcon icon={faPenFancy}/>
              </button>
            </div>
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
