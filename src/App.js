import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './mook/data';
import Card from './Conponent/Card/Card';

function App() {
  const [shoese] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MyShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoese.map((value, index) => {
            return <Card shoese={shoese[index]} i={index + 1} />;
          })}
        </div>
      </div>
    </div>
  );
}
// function Card(props) {
//   return (
//     <div className="col-md-4">
//       <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
//       <h4>{props.shoese[1].title}</h4>
//       <p>{props.shoese[1].price}</p>
//     </div>
//   );
// }

export default App;
