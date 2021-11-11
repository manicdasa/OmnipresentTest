import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Media } from 'reactstrap';

export const Header = () => 
{
    return(
        <Navbar bg="light" className="shadow" expand="lg">
            <Navbar.Brand>
                <Media object src='/images/logo.png' alt="Site logo" className="logo"></Media>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;