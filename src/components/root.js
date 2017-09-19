
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import {Component} from 'react';
import Checkout from './checkout';
class Router1 extends Component {
    render() {
        return (
            <div>
            <Router>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route path="/checkout" component={Checkout} />
                    </div>

            </Router>
            </div>
        );
    }
}
export default Router1;

