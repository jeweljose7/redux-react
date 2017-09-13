import React from 'react'; 
import {Addtocart} from '../actions/addtocart'; 
import {Changetotal} from '../actions/changetotal'; 
import { connect } from 'react-redux';
import {Col, CardPanel} from 'react-materialize'
import {Button} from 'react-materialize'

class Defaultlist extends React.Component {	
	render()
	{	
		var min=parseInt(this.props.filter.min);
		var max=parseInt(this.props.filter.max);
		var productarray = this.props.allitems;
		var list = productarray.map((val)=> {
			if(min<=val.cost && max>=val.cost) {
				return(<Col s={12} m={5}>
			              <CardPanel className="blue-grey darken-1 white-text">
			                  <span>
			                  	<div className="item CardPanel" key={val.key} >
									<div className="itemname">{val.name}</div>
									<div className="itemcost">{val.cost}</div>
									<div className="stock">{val.left}</div>
									<Button className="add-button" id={val.key} onClick={()=>this.props.onclick(val)} className="addtocart">Add to cart</Button>
								</div>
			                  </span>
			              </CardPanel>
            			</Col>);
					// <div className="item CardPanel" key={val.key} >
					// 		<div className="itemname">{val.name}</div>
					// 		<div className="itemcost">{val.cost}</div>
					// 		<div className="stock">{val.left}</div>
					// 		<button id={val.key} onClick={()=>this.props.onclick(val)} className="addtocart">Add to cart</button>
					// 	</div>);
			}
		});		
		return (<div>{list}</div>);
	}
}
const mapStateToProps = (state,ownProps) => {
	return{
		allitems:state.itemlist,
		filter:state.filter
	};
}
const  mapDispatchToProps = (dispatch, ownProps) => {
	return{
	  	onclick:(key)=> {
	  		dispatch(Addtocart(key));
	  		dispatch(Changetotal(key));
		}
	};
};
export default connect(mapStateToProps,mapDispatchToProps)(Defaultlist);
