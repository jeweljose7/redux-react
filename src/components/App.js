import React from 'react'; 
import List from'./defaultlist.js'
import Addeditems from'./addeditems.js'
import Total from './total.js'


import '../App.css';

class App extends React.Component {
  render() {
    return (
      
        <div className="page">
          <div className="header">
            <p className="header_text">SHOPPING CART</p>
          </div>
          <div className="products">PRODUCTS
            <List />
          </div>
          <div className="yourcart">CART
            <div className="cartlist">
              <Addeditems />
            </div>
            <div className="total">
              <Total />
            </div>
            
          </div>
        </div> 
      
    );
  }
}

export default App;
