import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

function App() {
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

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://m.media-amazon.com/images/S/aplus-media/vc/b2d00dc2-c07c-4302-b827-c1e1c48f0f84._CR0,0,300,300_PT0_SX300__.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://beardoi.s3.ap-south-1.amazonaws.com/uploads/3382-2973-black-musk-eau-de-perfume-512x512.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-9518357119006.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
