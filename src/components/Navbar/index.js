import React from 'react';
import {Nav, NavLink, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavLink to="/about" activestyle="true">
                    About
                </NavLink>
                <NavLink to="/rounds" activestyle="true">
                    Rounds
                </NavLink>
                <NavLink to="/admin" activestyle="true">
                    Admin
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;