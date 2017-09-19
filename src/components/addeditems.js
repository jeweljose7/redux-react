import React from 'react'; 
import { connect } from 'react-redux';
import {Checkout} from '../actions/checkout'; 
import {Button} from 'react-materialize'
import {Link} from 'react-router-dom'

const mapStateToProps = (state,ownProps) => {
	return{
		allitems:state.addeditems
	};
}
const  mapDispatchToProps = (dispatch, ownProps) => {
	return{
	  	onclick:()=> {
	  		dispatch(Checkout());
	  	}
	};
};
class Addeditems extends React.Component {
	render()
	{	
		var productarray = this.props.allitems;		
		if(productarray.length!==0){			
			var list = productarray.map((val)=> 
				(<div className="item" key={Math.random()}>
					<div className="addeditemname">{val.name}</div>
					<div className="addeditemcost">{val.cost}</div>
					<div className="addeditemcount">{val.counter}</div>
				</div>));
			return (
				<div>
					{list}<Link to = '/checkout'>
					<Button onClick={()=>this.props.onclick()} className="checkout">checkout</Button>
					</Link>
				</div>
			);
		}
	return <div>Select an Item</div>
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Addeditems);