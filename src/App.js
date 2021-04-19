import React from 'react'
import './App.css'
import Basket from './component/Basket/Basket'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import data from './data'


const App = () => {
  const {products} = data
  return (
  <div className="App">
    <Header></Header>
    <div className="row">
    <Main products={products} />
      <Basket />
    </div>
  </div>
  )
}

export default App

