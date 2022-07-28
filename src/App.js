import { useState } from "react";
import logo from "./logo.svg";
import { About, Home } from "./NavComponents";
import "./App.css";

function App() {
  const [loadedComponent, setLoadedComponent] = useState("Home");
  return (
    <div id="main-content">
      <header>
        <div className="logo">Jvtrf</div>
        <div className="menu">
          <nav>
            <button
              className="menu-link"
              onClick={() => setLoadedComponent("Home")}
            >
              <i className="fa-solid fa-house"></i>Home
            </button>
            <button
              className="menu-link"
              onClick={() => setLoadedComponent("About")}
            >
              <i className="fa-solid fa-user"></i>About
            </button>
            <a
              className="menu-link"
              href="https://github.com/jvtrf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>Git
            </a>
            <a
              className="menu-link"
              href="https://www.linkedin.com/in/jvtrf/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>Linkedin
            </a>

            <div id="contact-drop">
              <div className="menu-link">
                <i className="fa-solid fa-envelope"></i>Contact
              </div>
              <div id="contact-drop-content">
                <a
                  className="menu-link"
                  href="https://api.whatsapp.com/send?phone=5562981488991"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i>Whatsapp
                </a>
                <a
                  className="menu-link"
                  href="https://t.me/+5562981488991"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-telegram"></i>Telegram
                </a>
                <a className="menu-link" href="#">
                  <i className="fa-brands fa-instagram"></i>Instagram
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {loadedComponent === "Home" ? <Home /> : ""}
      {loadedComponent === "About" ? <About /> : ""}
    </div>
  );
}

export default App;
