import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from 'axios';
const Navbar = () =>
{
  const [ isNavShowing, setIsNavShowing ] = useState( false );
  const [ loginModal, setLoginModal ] = useState( false );
  const [ registrationModal, setRegistrationModal ] = useState( false );
  const [ user, setUser ] = useState( {} );
  const handleLoginModal = () =>
  {
    setLoginModal( !loginModal );
  };
  // const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
  // console.log( user );

  // const setData = async () =>
  // {
  //   const payload = {
  //     name: user.name,
  //     email: user.email,
  //     picture: user.picture,
  //   };
  //   console.log( payload );
  //   const res = await axios.post( 'http://localhost:8080/api/auth/registration', payload );
  //   console.log( res );
  // };
  // if ( user )
  // {
  //   setData();
  // }
  console.log( user );
  return (
    <>
      <nav>
        <div className="container nav_container">
          <Link to="/" className="logo" onClick={ () => setIsNavShowing( false ) }>
            <img src={ logo } alt="Nav Logo" />
          </Link>
          <ul
            className={ `nav__links ${ isNavShowing ? "show__nav" : "hide__nav"
              }` }>
            { links.map( ( { name, path }, index ) =>
            {
              return (
                <li key={ index }>
                  <NavLink
                    to={ path }
                    className={ ( { isActive } ) => ( isActive ? "active-nav" : "" ) }
                    onClick={ () => setIsNavShowing( ( prev ) => !prev ) }>
                    { name }
                  </NavLink>
                </li>
              );
            } ) }
            <li style={ { color: "white", cursor: "pointer" } } onClick={ () => setLoginModal( true ) }>Login</li>
            <li style={ { color: "white", cursor: "pointer" } } onClick={ setRegistrationModal }>Registration</li>
            { user?.isAdmin && <NavLink to='/admin'><li style={ { color: "white", cursor: "pointer" } } >Admin</li> </NavLink> }
          </ul>
          <button
            className="nav__toggle-btn"
            onClick={ () => setIsNavShowing( ( prev ) => !prev ) }>
            { isNavShowing ? <MdOutlineClose /> : <GoThreeBars /> }
          </button>
        </div>
      </nav>
      { loginModal && <LoginModal onClose={ handleLoginModal } setUser={ setUser } /> }
      { registrationModal && <RegistrationModal setRegistrationModal={ setRegistrationModal } /> }
    </>
  );
};

export default Navbar;
