import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ProductPage />} path="/product/:id" />
            <Route element={<Signin />} path="/signin" />
            <Route element={<CartPage />} path="/cart/:id?" />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
