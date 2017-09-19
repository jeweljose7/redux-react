import React from 'react'; 
import Total from './total.js'
import {Col, CardPanel} from 'react-materialize'
import { connect } from 'react-redux';

const mapStateToProps = (state,ownProps) => {
	return{
		totalval:state.total,
	};
}

class checkout extends React.Component {
  render() {
    return (
      <div className="header">
        <Col s={12} m={5}>
          <CardPanel className=" blue-grey darken-3 white-text">
              <span>YOU HAVE TO PAY RS    {this.props.totalval.total}</span>
          </CardPanel>
        </Col>
      </div>
        
     );
  }
}
export default connect(mapStateToProps)(checkout);