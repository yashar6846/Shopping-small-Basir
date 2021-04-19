import React from 'react'

const Header = (props) => {
    const {countCartItems} = props;
    return (
        <header className="row block center">
           <div>
               <a href="#/">
               <h2>Small shopping cart</h2>
               </a>
           </div> 
           <div>
    <a href="#/cart">
        cart{' '}
        {countCartItems ? (
            <button className="badge">{countCartItems}</button>
        ) : (
         ''
        )}
        </a>{' '}
    <a href="#/signin">signin</a>
  </div>
        </header>
    )
}

export default Header
