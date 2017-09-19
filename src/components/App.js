import React from 'react'; 
import List from'./defaultlist.js'
import Addeditems from'./addeditems.js'
import Total from './total.js'
import Filter from './filter.js'
import {Col, CardPanel} from 'react-materialize'
import {Button} from 'react-materialize'
import '../App.css';

class App extends React.Component {
  render() {
    return (
      
        <div className="page">
          <div className="header">
            <Col s={12} m={5}>
              <CardPanel className=" blue-grey darken-3 white-text">
                  <span>SHOPPING CART</span>
              </CardPanel>
            </Col>
          </div>
          <div className="filter">
            <Col s={12} m={5}>
                <CardPanel className=" blue-grey darken-2 white-text">
                    <span><Filter /></span>
                </CardPanel>
              </Col>
            
          </div>
          <div className="products">
            <Col s={12} m={5}>
              <CardPanel className=" blue-grey darken-2 white-text">
                  <span> <h5>PRODUCTS</h5> <List /></span>
              </CardPanel>
            </Col>
          </div>
          <div className="yourcart">
            <Col s={12} m={5}>
              <CardPanel className=" blue-grey darken-2 white-text">
                  <span> <h5>CART</h5>
                    <div className="cartlist">
                      <Col s={12} m={5}>
                        <CardPanel className="blue-grey darken-1 white-text">
                            <span> <Addeditems /> </span>
                        </CardPanel>
                      </Col>
                    </div>
                    <div className="total">
                      <Col s={12} m={5}>
                      <CardPanel className="blue-grey darken-1 white-text">
                          <span>TOTAL <Total /> </span>
                      </CardPanel>
                      </Col>
                    </div>
                    <Button>checkout</Button>
                  </span>
              </CardPanel>
            </Col>
          </div>
        </div> 
      
    );
  }
}

export default App;
