
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import './NavBar.css';
import { HashLink } from 'react-router-hash-link';
import Conect from '../conection/Conect';
import { Link } from 'react-router-dom';
const NavBar = () => {
    ///change backgraound color of nav bar after scrolling
    const [color, setColor] = useState(true);
    const changeColor = () => {
        if (window.scrollY <= 160) {
            setColor(true);
        } else {
            setColor(false)
        }
    };
    window.addEventListener("scroll", changeColor, true);
    /// ........................................
    const [d, setD] = useState(false);
    const changeD = () => {
        setD(current => !current);
    }

    return (
        // <div className='cover-nav'>
        //     <nav className= "navbar">
        //         <input type="checkbox" id='toggler' name="toggler" />
        //         <label htmlFor="toggler"><FaBars /></label>
        //         <a className='logo text-light p-2' href='/home'>L7aj-<span>Hotel</span></a>
        //         <div className='menu p-1'>
                    
        //                 <ul className='menu-items '>

        //                     <li className="nav-item">
        //                         <HashLink data-text="" to='#home'>Home </HashLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <HashLink data-text="" to='#about'>About</HashLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <HashLink data-text="" to='#services'>Servises </HashLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link data-text="" to='#home'>Rooms </Link>
        //                     </li>


        //                 </ul>
                    
        //         </div>

        //         <button id='login' className='conct-btn' onClick={changeD}><FaUser /></button>

        //     </nav>

        //     {d ? <Conect /> : ''}

        // </div>
        <div className={color?"main-nav mb-3":"main-nav toggel mb-3"}>

        <Navbar  expand='expand' >
          <Container fluid>
            <Navbar.Brand >
                <Link to="/home" className='logo '>L7aj-<span>Space</span></Link>
            </Navbar.Brand>
            <div className='d-flex '>

            <button id='login' className={d?'conct-btn text-warning click':'conct-btn'}  onClick={changeD}><FaUser /></button>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-false' className='main-bar' style={{ boxShadow: 'none',outline: 'none',border: 'none', color:'#ffff' }}><FaBars/> </Navbar.Toggle>
            </div>
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-false'
              aria-labelledby='offcanvasNavbarLabel-expand-false'
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-false'>
                    <Link to="/" className='logo nav-link'>L7aj-<span>Space</span></Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className='nav-link'>Home</Link>
                  <Link to="/help" className='nav-link'>help</Link>
                  <HashLink className='nav-link' to='/#about'>About</HashLink>
                  <HashLink className='nav-link' smooth to='#services'>Servises </HashLink>
                  
                  <NavDropdown
                    href='false'
                    title="User"
                    id='offcanvasNavbarDropdown-expand-false'
                    
                  >
                    <NavDropdown.Item>
                       <Link to="/login" className='nav-link'>Login</Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/signup">
                        <Link to="/signup" className='nav-link'>Signup</Link>
                    </NavDropdown.Item>
                    
                  </NavDropdown>
                </Nav>
                <Form className="d-flex mt-3">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        {d ? <Conect /> : ''}
    </div>
  );
    
}

export default NavBar