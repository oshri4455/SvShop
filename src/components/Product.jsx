import React,{useState} from 'react'
import Cart from './Cart'
import "./Home.css"

export default function Products(props) {



  
    

  return (

    <div  >

<h2 id='products' >name :{props.name}  price : {props.price}</h2>


<button onClick={()=>{props.addProductToCart(props.index)}} id='button'>+</button>
    </div>
  )
}


