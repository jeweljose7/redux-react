import React from 'react'; 
import List from'./defaultlist.js'
import Addeditems from'./addeditems.js'
import Total from './total.js'
import Filter from './filter.js'
import {Col, CardPanel} from 'react-materialize'


import '../App.css';

class App extends React.Component {
  render() {
    return (
      
        <div className="page">
          <div className="header">
            <Col s={12} m={5}>
              <CardPanel className=" blue darken-4 white-text">
                  <span>SHOPPING CART</span>
              </CardPanel>
            </Col>
          </div>
          <div className="filter">
            <Filter />
          </div>
          <div className="products">
            <Col s={12} m={5}>
              <CardPanel className="grey lighten-1 black-text">
                  <span> PRODUCTS <List /></span>
              </CardPanel>
            </Col>
          </div>
          <div className="yourcart">
            <Col s={12} m={5}>
              <CardPanel className="grey lighten-1 black-text">
                  <span> CART
                    <div className="cartlist">
                      <Col s={12} m={5}>
                        <CardPanel className="blue darken-4 black-text">
                            <span> <Addeditems /> </span>
                        </CardPanel>
                      </Col>
                    </div>
                    <div className="total">
                      <Col s={12} m={5}>
                      <CardPanel className="blue darken-4 black-text">
                          <span>TOTAL <Total /> </span>
                      </CardPanel>
                      </Col>
                    </div>
                  </span>
              </CardPanel>
            </Col>
          </div>
        </div> 
      
    );
  }
}

export default App;
