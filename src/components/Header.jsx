import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {
  return (
    <div>
      <Navbar data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="no image"
              src="https://image.similarpng.com/very-thumbnail/2020/08/Logo-Car-service-center-on-transparent-background-PNG.png"
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{' '}
            
            VECTOR GARAGE
          </Navbar.Brand>
          <Nav className="me-auto">

            <NavDropdown title="Our Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Coupons</NavDropdown.Item>
              <NavDropdown.Item href="">
                Location
              </NavDropdown.Item>
              <NavDropdown.Item href="">Blog</NavDropdown.Item>
              <NavDropdown.Item href="">Reviews</NavDropdown.Item>
              <NavDropdown.Item href="">Customer Service</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Auto Repair" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Alignment</NavDropdown.Item>
              <NavDropdown.Item href="">
                A/C Service
              </NavDropdown.Item>
              <NavDropdown.Item href="">Brakes</NavDropdown.Item>
              <NavDropdown.Item href="">
                Diagnostics
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                Engine Services
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Repair Tips" id="basic-nav-dropdown">
              <NavDropdown.Item href="">General Maintenance</NavDropdown.Item>
              <NavDropdown.Item href="">
                Cost Saving Tips
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Location</NavDropdown.Item>
              <NavDropdown.Item href="">
                Call Us
              </NavDropdown.Item>
            </NavDropdown>


          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header