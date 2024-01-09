import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

 export default function Navigation() {
  return (
    <Navbar id="head" bg="" variant="">
    <Container>

     
      <Nav className="me-auto">
      <Navbar.Brand href="#/Home" title="Wellcome to Indian Overseas Bank" >Home</Navbar.Brand>
        <Nav.Link href="#/create" title='To Create Account' >Create</Nav.Link>
        <Nav.Link href="#/deposit" title='To Deposit Amount' >Deposit</Nav.Link>
        <Nav.Link href="#/withdraw" title='To Withdraw Amount' >Withdrawal</Nav.Link>
        <Nav.Link href="#/alldata" title='To see Alldata' >Alldata</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}
