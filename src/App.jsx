import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Components/Loading";

const LazyHeader = lazy(() => import("./Components/Header"));
const LazyDashboardPage = lazy(() => import("./Pages/DashboardPage"));
const LazyCoinPage = lazy(() => import("./Pages/CoinPage"));
const LazyErrorPage = lazy(() => import("./Pages/ErrorPage"));
const LazyHomePage = lazy(() => import("./Pages/HomePage"));
const LazyPrivateRoute = lazy(() => import("./Pages/PrivateRoute"));
const LazyAccountPage = lazy(() => import("./Pages/AccountPage"));
const LazyAuthProvider = lazy(() => import("./Context/AuthContext"));
const LazyAboutPage = lazy(() => import("./Pages/AboutPage"));
const LazyContactPage = lazy(() => import("./Pages/ContactPage"));
const LazyFooter = lazy(() => import("./Components/Footer"));
const LazyTermsConditionPage = lazy(() => import("./Pages/TermsConditionPage"));
const LazyDisclaimerPage = lazy(() => import("./Pages/DisclaimerPage"));

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <LazyAuthProvider>
            <LazyHeader />
            <Routes>
              <Route path="/" element={<LazyHomePage />}>
                HomePage
              </Route>
              <Route path="/Account" element={<LazyAccountPage />}>
                Account Page
              </Route>
              <Route path="/About" element={<LazyAboutPage />}>
                About Us
              </Route>
              <Route path="/Contact-us" element={<LazyContactPage />}>
                Contact Us
              </Route>
              <Route element={<LazyPrivateRoute />}>
                <Route path="/Dashboard" element={<LazyDashboardPage />} exact>
                  Dashboard
                </Route>
                <Route path="/Coin/:id" element={<LazyCoinPage />}>
                  Coin Page
                </Route>
              </Route>
              <Route
                path="/Term-Condition"
                element={<LazyTermsConditionPage />}
              >
                Term Condition Page
              </Route>
              <Route path="/Disclaimer" element={<LazyDisclaimerPage />}>
                Disclaimer
              </Route>
              <Route path="*" element={<LazyErrorPage />}>
                Error Page
              </Route>
            </Routes>
            <LazyFooter />
            <ToastContainer />
          </LazyAuthProvider>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
