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
            <Nav.Link href="">Home</Nav.Link>

            <NavDropdown title="Our Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Coupons</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Location
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Reviews</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Customer Service</NavDropdown.Item>
              
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown title="Auto Repair" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Repair Tips" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header