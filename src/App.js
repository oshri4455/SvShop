import { useState } from 'react';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import Home from './components/Home';
import Head from './components/Head';



function App() {

const [products,setProducts]=useState([{name:'computer',price:1000 },{name:'pen',price:12},{name:'paper',price:50}])
const [cart,setCart]=useState([]);
const [invoice,setInvoice] =useState([])


const removeProduct = (index) =>{
  let newArrProduct = cart.filter((val , i)=> (i != index))
  setCart([...newArrProduct])
  
  }

const addProductToCart =(index)=>{
setCart([...cart,products[index]])


}

const AddArr = ()=>{
  let counter = 0
cart.map((val)=>{counter += val.price })
  setInvoice([...invoice,{price:counter}])
  

}
  return (

    
    <div className="App">


    <Home  />
   <Head  />
     {products.map((val,index)=>{
   return <Product del = {removeProduct}  addProductToCart={addProductToCart} name={val.name} price={val.price} index={index}  />

     })}



     <Cart cart = {cart} del = {removeProduct} AddArr = {AddArr} invoice = {invoice}  />




    </div>
  );
}

export default App;