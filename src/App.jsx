import { useState } from "react";
import "./App.css";
import Cart from "./component/CartComponent";

function App() {
  return (
    <>
      <h1 className="title">Carrello della spesa</h1>
      <Cart />
    </>
  );
}

export default App;
