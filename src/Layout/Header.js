import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar className="nav">
        <Container>
          <b>
            <Navbar.Brand className="title">To Do List</Navbar.Brand>
          </b>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary" />
    </>
  );
}

export default Header;
