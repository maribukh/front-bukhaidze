import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <Header />
      <Posts />
    </>
  );
}

export default App;
