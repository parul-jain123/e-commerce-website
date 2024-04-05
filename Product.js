
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
 import { useDispatch } from 'react-redux';
  import { ADD } from './action';
const Product = () => {
   const dispatch = useDispatch()
    const { id } = useParams()
    const [val, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const send = (item) => {
      dispatch(ADD(item))
        alert("Item added successfully")
    }
    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json())
        setLoading(false)
    }
    const Loading = () => {
        return (
            <>
                <div className="mt-4">
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <img src={val.image} alt={val.image} height={400} width={500} />
                        </div>
                        <div className="col-lg-6 mt-5">
                            <h4 className='texr-uppercase'>{val.category}</h4>
                            <h1 className='display-5'>{val.title}</h1>
                            <p className='fw-bolder'>Rating {val.rating && val.rating.rate}</p>
                            <h3>$ {val.price}</h3>
                            <p>{val.description}</p>
                            <Button onClick={() =>send(val)} variant="dark">Add to Cart</Button>
                            <Button className='ms-3' variant="dark">Go to Cart</Button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return (
        <div>
            <div className="container">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
}

export default Product
