import React, { useState, lazy } from "react";
const ButtonElement = lazy(() => import("ButtonHost/AppButton"));
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/300-italic.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/400-italic.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/500-italic.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/600-italic.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/700-italic.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/open-sans/800-italic.css";
import "@fontsource/pt-mono";

const App = () => {
  return (
    <>
      <h1>Remote App</h1>
      <div>
        <ButtonElement></ButtonElement>
      </div>
    </>
  );
};

export default App;
