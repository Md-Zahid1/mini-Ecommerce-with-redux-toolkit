import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProducts } from '../store/productSlice'
import { STATUSES } from '../store/productSlice'

const Products = () => {
    const dispatch = useDispatch();
    // const { data: products, status } = useSelector((state) => state.product);
    const [product, setProduct] = useState([])

    useEffect(() => {
        // dispatch(fetchProducts());
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            console.log(data)
            setProduct(data)
        }
        fetchProducts();
    }, [])
    console.log('productsssss', product)
    const handleAdd = (item) => {
        console.log('handleAdd', item)
        dispatch(add(item))

    }

    // if (status === STATUSES.LOADING) {
    //     return <h2>Loading......</h2>
    // }

    // if (status === STATUSES.ERROR) {
    //     return <h2>somthing went wrong!</h2>
    // }

    return (
        <div className='productsWrapper'>
            {
                product.map((items, ind) => {
                    return (
                        <div className='card' key={items.id}>
                            <img src={items.image} alt='image' />
                            <h4>{items.title}</h4>
                            <h5>{items.price}</h5>
                            <button onClick={() => handleAdd(items)} className='btn'>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products