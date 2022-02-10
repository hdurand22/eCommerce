import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';
import SearchBox from './SearchBox';

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    }
    
    return (
        <header>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand>
                        <Link to='/' style={{textDecoration: 'none', color: '#343A40cc'}}>Small Kine Art</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to='/cart'><i className='fas fa-shopping-cart'/>Cart</Nav.Link>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link as={Link} to='/login'><i className='fas fa-user-circle' aria-hidden='true'/>Sign In</Nav.Link>
                        )}
                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown title='Admin' id='adminmenu'>
                                <NavDropdown.Item href='/admin/userlist'>Users</NavDropdown.Item>
                                <NavDropdown.Item href='/admin/productlist'>Products</NavDropdown.Item>
                                <NavDropdown.Item href='/admin/orderlist'>Orders</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                    <SearchBox />   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;