import React from "react";
import Header from "./componets/home/Header";
import Portfolio from "./componets/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <h1>hello home page</h1>
      <Header />
      <ImageShow />
      <Portfolio />
    </div>
  );
};

export default App;
