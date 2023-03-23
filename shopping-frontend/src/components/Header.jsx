import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BsCart3, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Furniture Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="ms-auto">
              <Nav.Link
                href="/cart"
                className="d-flex flex-column justify-content-center "
              >
                <div className="d-flex h-fit">
                  <BsCart3 className="m-1 mb-0 " />
                  <p className="mb-0">Cart </p>
                </div>
              </Nav.Link>
              <Nav.Link href="/signin" className="d-flex ">
                <BsFillPersonFill className="m-1 mb-0 " />
                <p className="mb-0">Sign In </p>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
