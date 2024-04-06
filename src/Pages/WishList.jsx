import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { removeFromWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

function WishList() {
  const dispatch = useDispatch()
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const handleWishlistCart = (products)=>{
    dispatch(addToCart(products))
    dispatch(removeFromWishlist(products.id))
  }
  return (
    <div style={{marginTop:'100px'}}>

<Row className='ms-5'>
      {
       wishlistArray?.length>0?
       wishlistArray?.map((product,index)=>(
      <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded' style={{ width: '18rem',height:'29rem' }}>
      <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
         <p> {product?.description.slice(0,55)}...</p>
         <h5>${product?.price}</h5>
        </Card.Text>
       <div className='d-flex justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light'><i className="fa-solid fa-trash text-danger fa-2x"></i></Button>
          <Button onClick={()=>handleWishlistCart(product)} className='btn btn-light'><i className="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
  
       </div>
      </Card.Body>
    </Card>
    </Col>
        )):<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'250px'} src="https://vastrasanskriti.com/img/empty-wishlist.png" alt="" />
          <h3>Your Wishlist is Empty!!!</h3>
          <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to={'/'}>Back To Home</Link>
        </div>
}
    </Row>
    </div>
  )
}

export default WishList