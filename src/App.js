import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import {toast} from 'react-toastify';
import './App.css';
import BuyPage from './Buy';

function App() {
  console.log("control is now in App.js")
  const[cartItem,setCartItem] = useState([]);
  
  const addInCart = item =>{
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id;
    })

    if(isAlreadyAdded !== -1){
      toast("Item is already added in cart.",{
        type:"error"
      })
    }
    else{
      setCartItem([...cartItem,item]);
    }
  }

  const buyNow = ()=>{
    setCartItem([]);
    toast("Purchase done",{
      type:"success"
    })
  }

  const removeItem = item =>{
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
  }
  

  return (
    <div className="App">
      <BuyPage addIncart={addInCart}/>
    </div>
    
  );console.log("BuyPage component is called and props are passed.")
  
}

export default App;
