import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="/coin/:id" element={<CoinPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
