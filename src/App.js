import React, {useState} from 'react'
// import './App.css'
import Basket from './component/Basket/Basket'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import data from './data'


const App = () => {
  const {products} = data
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1} : 1
        )
      )
    }else {
      setCartItems([...cartItems, {...product, qty: 1 }])
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1} : x
        )
      )
    }
  }

  return (
  <div className="App">
    <Header></Header>
    <div className="row">
    <Main onAdd={onAdd} products={products} />
      <Basket onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>
    </div>
  </div>
  )
}

export default App

