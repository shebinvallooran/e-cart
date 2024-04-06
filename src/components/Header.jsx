import React from 'react'
import { Container, Navbar,Nav,Badge,NavbarCollapse } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <div><Navbar className="bg-primary">
    <Container>
      <Navbar.Brand>
        <Link to={'/'} className='fs-4' style={{textDecoration:"none",color:"white" , fontWeight:"bold"}}>
      <i className="fa-solid fa-truck-fast me-2"></i>
        E Cart
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link className='btn border rounded'>
                <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    <i className="fa-solid fa-heart text-danger me-2"></i>Wishlist
                    <Badge className='ms-2 rounded text-dark' bg="light">{wishlist.length}</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link className='btn border rounded ms-3'>
                <Link to={'/Cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    <i className="fa-solid fa-cart-shopping text-warning me-2"></i>Cart
                    <Badge className='ms-2 rounded text-dark' bg="light">{cart.length}</Badge>
                </Link>
            </Nav.Link>

        </Nav>
      </NavbarCollapse>
    </Container>
  </Navbar></div>
    
  )
}

export default Header