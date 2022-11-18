import React ,{useState} from 'react'
import "./Home.css"



export default function Cart(props) {

  const [invoice , setinvoice] = useState([])
  
let sum = 0;
{props.cart.map((item)=>{sum+=item.price})}






  return (

    <div >
        <h1 style={{textAlign:'center'}} >cart List</h1>
        <hr />
        {props.cart.map((val ,index)=>{
  return <p>name:{val.name}  price:{val.price} <button style={{backgroundColor:'black',color:'white'}} onClick={()=>{props.del(index)}}>-</button></p>
  
        })}
      
       <h3  >Total:{sum}</h3>

       <button onClick={()=>{props.AddArr(props.index)}} style={{backgroundColor:'black',color:'white',padding:'20px',borderRadius:'10px'}}  >Buy</button> 
    </div>
    
  )
}
