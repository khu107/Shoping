import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './mook/data';
import Card from './Conponent/Card/Card';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './Conponent/Detail/Detail';
import Event from './Conponent/Event/Event';

function App() {
  const [shoese] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MyShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoese.map((value, index) => {
                    return <Card shoese={shoese[index]} i={index + 1} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail shoese={shoese} />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>ilk zakas qilsangiz sivga </div>} />
          <Route path="two" element={<div> tugulgan kun sovgasi </div>} />
        </Route>
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
