import React from "react";
import { useGlobalContext } from "./components/context";

// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
