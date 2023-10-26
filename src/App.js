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
import AdminLayout from "./layout/AdminLayout";
import UsersPage from "./UsersPage/UsersPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />
        <Spinner />
        <Routes>
          {/* user route */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Route>
          {/* admin route */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<UsersPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
