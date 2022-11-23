import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Cart from './Conponent/Cart/Cart';
import data from './mook/data.js';

function App(prop) {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Perfume</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Cart />
    </div>
  );
}

export default App;
