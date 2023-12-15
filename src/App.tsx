import { Router, Route } from "wouter";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShopCartProvider } from "./context/ShopCartContext";

function App() {
  return (
    <ShopCartProvider>
      <Navbar />
      <Container>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/store" component={Store} />
        </Router>
      </Container>
    </ShopCartProvider>
  );
}

export default App;
