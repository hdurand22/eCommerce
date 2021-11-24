import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand>
                        <Link to='/' style={{textDecoration: 'none', color: '#343A40cc'}}>Small Kine Games</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to='/cart'><i className='fas fa-shopping-cart'/>Cart</Nav.Link>
                        <Nav.Link as={Link} to='/login'><i className='fas fa-user-circle' aria-hidden='true'/>Sign In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;