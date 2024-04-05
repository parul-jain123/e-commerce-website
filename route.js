import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import Counter from "./useState1";
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';

export default function Store(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/")
        .then(res=>res.json())
        .then(res=>setdata(res))
        .catch(err=>console.log(err))
        
    })
     
    return(
        <>
    
        {
            data.map((val)=>{return(
                <>
               
                 <div className="col-3 mt-5" style={{ height: '500px',  width: '400px',padding:'20px'}} >
                            <Card key={val.id} className="border border-dark">
                                <Card.Img variant="top" style={{ height: '300px',  width: '300px',padding:'20px',margin:'20px'}} src={val.image} />
                                <Card.Body>
                                    <Card.Title>{val.title.substring(0, 12)}</Card.Title>
                                    <Card.Text className='fw-bold'>
                                        $ {val.price}
                                    </Card.Text>
                                    <Link to={`/vals/${val.id}`}> <Button variant="dark">Buy Now</Button></Link>
                                </Card.Body>
                            </Card>
            </div> 
           

                </>
            )})
        }
        </>
    )  ;
    

}