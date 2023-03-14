import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="">
      <Header />
      <main className="relative w-full h-[800px] flex flex-col justify-center items-center">
        <Steps />
      </main>
    </div>
  );
}

export default App;
