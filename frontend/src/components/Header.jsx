import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    }

    const handleProfileNav = () => {
        console.log('clicked profile button')
    }
    
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
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <Nav.Link as={Link} to='/profile'>
                                    <NavDropdown.Item onClick={handleProfileNav}>Profile</NavDropdown.Item>
                                </Nav.Link>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : <Nav.Link as={Link} to='/login'><i className='fas fa-user-circle' aria-hidden='true'/>Sign In</Nav.Link>}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;