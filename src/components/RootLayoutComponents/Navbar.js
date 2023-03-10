import React, { useState } from "react";
import '../../css/Navbar.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar({ isLoggedIn, signOut }) {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="white" className='pb-0'>
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <h2 className="my-0 mainNavTitle">DWELLINN</h2>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink className="navigation-item" aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="navigation-item" aria-current="page" href="/about">
                About
              </MDBNavbarLink>
            </MDBNavbarItem>

            {isLoggedIn &&
              <MDBNavbarItem>
                <MDBNavbarLink className="navigation-item" aria-current="page" href="/landlorddash">
                  Dashboard
                </MDBNavbarLink>
              </MDBNavbarItem>
            }

            <MDBNavbarItem>
              {!isLoggedIn &&
                <MDBNavbarLink className="navigation-item" aria-current="page" href="/login">
                  Login
                </MDBNavbarLink>
              }

              {isLoggedIn &&
                <MDBNavbarLink className="navigation-item" aria-current="page" onClick={signOut}>
                  Logout
                </MDBNavbarLink>
              }

            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
