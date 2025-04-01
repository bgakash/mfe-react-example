import React, { Suspense, lazy } from "react";
const ButtonElement = lazy(() => import("ButtonHost/Button"));

const App = () => {
  return (
    <div>
      Host App
      <Suspense fallback="loading...">
        <ButtonElement></ButtonElement>
      </Suspense>
    </div>
  );
};

export default App;
