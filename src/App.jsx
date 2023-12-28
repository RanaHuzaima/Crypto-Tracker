import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import DashboardPage from "./Pages/DashboardPage";
import CoinPage from "./Pages/CoinPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import PrivateRoute from "./Pages/PrivateRoute";
import AccountPage from "./Pages/AccountPage";
import AuthProvider from "./Context/AuthContext";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}>
              HomePage
            </Route>
            <Route path="/Account" element={<AccountPage />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path="/Dashboard" element={<DashboardPage />} exact>
                Dashboard
              </Route>
              <Route path="/coin/:id" element={<CoinPage />}>
                Coin Page
              </Route>
            </Route>
            <Route path="*" element={<ErrorPage />}>
              Error Page
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
