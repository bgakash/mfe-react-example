import React, { Suspense, lazy } from "react";
const ButtonElement = lazy(() => import("ButtonHost/Button"));

const App = () => {
  return (
    <>
      Host App
      <Suspense fallback="loading...">
        <ButtonElement></ButtonElement>
      </Suspense>
    </>
  );
};

export default App;
