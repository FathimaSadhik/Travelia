import React from 'react'
import { Button,Container,Form,Nav,Navbar,NavDropdown } from 'react-bootstrap'
const Navdesign = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand style={{fontSize:'35px',fontWeight:'600'}} className="ms-5" href="#">Travelia</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-5 my-2 my-lg-0"
          style={{ maxHeight: '100px'}}
          navbarScroll
        >
          <Nav.Link  style={{fontWeight:'600',fontSize:'20px', marginLeft:'50px'}} className="ms-5"  href="#Home">Home</Nav.Link>
          <Nav.Link style={{fontWeight:'600',fontSize:'20px', marginLeft:'50px'}}  href="#Trips">Trips</Nav.Link>
          <Nav.Link style={{fontWeight:'600',fontSize:'20px', marginLeft:'50px'}} href="#Searches">Searches</Nav.Link>
          <Nav.Link style={{fontWeight:'600',fontSize:'20px', marginLeft:'50px'}}  href="#About">About</Nav.Link>
          <Nav.Link style={{fontWeight:'600',fontSize:'20px', marginLeft:'50px'}}  href="#Popular Destinations">Popular Destinations</Nav.Link>
          {/* <NavDropdown style={{fontWeight:'600',fontSize:'20px', marginLeft:'50px'}}  title="Popular Destinations" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#">Searches</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form style={{marginLeft:'100px'}} className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navdesign