import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter/appRouter";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
