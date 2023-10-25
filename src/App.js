import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import DetailPage from "./page/DetailPage/DetailPage";
import Footer from "./components/Footer/Footer";
import Layout from "./layout/Layout";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        <Spinner />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Layout>
                <DetailPage />
              </Layout>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
