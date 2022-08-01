import { useState } from "react";
import Header from "./Components/Header";
import Page from "./Components/Page";
import "./App.css";

function App() {
  const [loadedComponent, setLoadedComponent] = useState("Home");
  return (
    <div>
      <Header setLoadedComponent={setLoadedComponent} />
      <Page loadedComponent={loadedComponent} />
    </div>
  );
}

export default App;
