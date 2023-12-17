import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  console.log('productaaaaaa', products)
  const handleRemove = (itemId) => {
    dispatch(remove(itemId))
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className='productsWrapper'>
        {
          products.map(item =>
          (
            <div className='cartCard' key={item.id}>
              <img src={item.image} alt='image' />
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button className='btn' onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
