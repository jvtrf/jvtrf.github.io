function Header(props) {
  //############### Page Theme ############
  const handleThemeSwitch = (e) => {
    e.target.checked ? darkTheme() : lightTheme();
  };
  const darkTheme = () => {
    document.documentElement.style.setProperty(
      "--main-color",
      "rgb(65, 65, 65)"
    );
    document.documentElement.style.setProperty(
      "--main-color-gradient",
      "linear-gradient(var(--main-color), black)"
    );
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty(
      "--nav-bg-hover",
      "rgba(49, 49, 49, 0.8)"
    );
  };
  const lightTheme = () => {
    document.documentElement.style.setProperty("--main-color", "white");
    document.documentElement.style.setProperty(
      "--main-color-gradient",
      "linear-gradient(var(--main-color), rgb(179, 242, 253))"
    );
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty(
      "--nav-bg-hover",
      "rgba(241, 241, 241, 0.8)"
    );
  };
  //#######################################
  return (
    <header>
      <div className="logo">Jvtrf</div>
      <div className="menu">
        <nav>
          <button
            className="menu-link"
            onClick={() => props.setLoadedComponent("Home")}
          >
            <i className="fa-solid fa-house"></i>Home
          </button>
          <button
            className="menu-link"
            onClick={() => props.setLoadedComponent("About")}
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
                <i className="fa-brands fa-telegram"></i>Telegram
              </a>
              <a className="menu-link" href="https://t.me/+5562981488991">
                <i className="fa-brands fa-instagram"></i>Instagram
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div id="theme-switch" className="form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          onClick={handleThemeSwitch}
        />
      </div>
    </header>
  );
}

export default Header;
