import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Furniture Store</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
