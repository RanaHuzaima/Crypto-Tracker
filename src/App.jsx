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
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";

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
            <Route path="/Account" element={<AccountPage />}>
              Account Page
            </Route>
            <Route path="/About" element={<AboutPage />}>
              About Us
            </Route>
            <Route path="/Contact-us" element={<ContactPage />}>
              Contact Us
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/Dashboard" element={<DashboardPage />} exact>
                Dashboard
              </Route>
              <Route path="/Coin/:id" element={<CoinPage />}>
                Coin Page
              </Route>
            </Route>
            <Route path="*" element={<ErrorPage />}>
              Error Page
            </Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
