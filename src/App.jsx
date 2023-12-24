import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import Alert from "./Components/Alert";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact>
          Homepage
        </Route>
        <Route path="/coin/:id" element={<CoinPage />}>
          Coin Page
        </Route>
      </Routes>
      <Alert />
    </BrowserRouter>
  );
};

export default App;
