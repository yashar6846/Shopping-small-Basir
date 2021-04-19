import React from 'react'

const Header = (props) => {
    return (
        <header className="row block center">
           <div>
               <a href="#/">
               <h2>Small shopping cart</h2>
               </a>
           </div> 
           <div>
    
    <a href="#/cart">cart</a>
    <a href="#/signin">signin</a>
  </div>
        </header>
    )
}

export default Header
