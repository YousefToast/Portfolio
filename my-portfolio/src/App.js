import "./App.css";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <CodeIcon></CodeIcon>
      <title>Yousef A: Portfolio</title>
      <Home />
      <div>
        <section>
          <div>
            <a href="#Me">
              <h1>Yousef Abobaker</h1>{" "}
            </a>
          </div>
          <div>
            <ul>
              <li>
                <a href="#myJourney" data-after="My Journey">
                  My Journey
                </a>
              </li>
              <li>
                <a href="#about" data-after="About">
                  About
                </a>
              </li>
              <li>
                <a href="#myProjects" data-after="My Projects">
                  My Projects
                </a>
              </li>

              <li>
                <a href="#contact" data-after="Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section id="#myJourney">
        <div>
          <h1>My Coding Journey</h1>
        </div>
        <div>
          <h2>January 2022</h2>
          <p>
            Applied to Northcoders and began my journey in coding in preparation
            of my entry exam
          </p>
        </div>
        <div>
          <h2>February 2022</h2>
          <p>
            Started the Northcoders Bootcamp and learnt all the fundaments
            across the next month
          </p>
        </div>
        <div>
          <h2>March 2022</h2>
          <p>
            learnt Backend and applied my knowledge to my own project and
            created my own API server
          </p>
        </div>
        <div>
          <h2>April 2022</h2>
          <p>
            Learnt Frontend and applied my knowledge to my own project and
            created a react website with components that eventually interacted
            with my backend API
          </p>
        </div>
        <div>
          <h2>May 2022</h2>
          <p>
            Created a fully functioning app as part of a group project using
            frameworks never used before for our Graduation from Northcoders
          </p>
        </div>
      </section>
      <section>
        <div>
          <h1>About Me</h1>
          <h2>Junior Software Developer</h2>
          <p>
            Hello Everyone! I am a graduate from Northcoders. I Joined and
            completed their bootcamp which gave me all the skills to become a
            Software Developer. My decision to enter this market stemmed from a
            long time interest in technology and understanding how everything we
            use on a day to day works.
          </p>
        </div>
      </section>

      <CodeOffIcon></CodeOffIcon>
    </div>
  );
}

export default App;
