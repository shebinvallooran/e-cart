import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, emptyCart } from '../redux/slice/cartSlice'
import {useNavigate} from 'react-router-dom'

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()

  const getAllAmount=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  const handleCart = ()=>{
    dispatch(emptyCart())
    alert("Order succesfully placed... thank you for purchasing with us!!!")
    navigate('/')
  }
  useEffect(()=>{
    getAllAmount()
  },[cartArray])

  return (
    <div className='container'>
      {
        cartArray?.length>0?
          <div className='row mt-5'>
            <div className="col-lg-7">
              <table className='table shadow border'>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                </tr>
                </thead>
                <tbody>               
                  {
                    cartArray.map((item,index)=>(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td><img width={'100px'} src={item.thumbnail} alt="" /></td>
                        <td>${item.price}</td>
                        <td><i onClick={()=>dispatch(removeFromCart(item.id))} className="fa-solid fa-trash text-danger"></i></td>
                      </tr>
              
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-4 mb-3'>
                  <div className='shadow border rounded p-3'>
                    <h1 className='text-info'>Cart Summary</h1>
                    <h4 className='mt-3'>Total Products : <span>{cartArray.length}</span></h4>
                    <h4 className='mt-3'>Total  : <span className='fw-bold text-danger'>${total}</span></h4>
                    <div className="d-grid mt-5">
                      <button onClick={handleCart} className='btn btn-success rounded'>Check Out</button>
                    </div>
                  </div>
            </div>

            

          </div>
        :
        <div className='w-100 d-flex flex-column justify-content-center align-items-center mt-5 mb-5'>
          <img width={'263px'} src="https://assets-v2.lottiefiles.com/a/7b264970-1167-11ee-813e-fb3408905ffd/cBuAtbkfQC.gif" alt="" />
        </div>
      }
    </div>
  )
}

export default Cart