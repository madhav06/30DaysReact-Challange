import React from "react";
import Buttons from "./Buttons";
import SearchForm from "./SearchForm";
import Stories from "./Stories";

function App() {
  return (
    <React.Fragment>
      <SearchForm />
      <Buttons />
      <Stories />
    </React.Fragment>
  );
}

export default App;
