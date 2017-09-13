import React from 'react'; 
import {Addtocart} from '../actions/addtocart'; 
import {Changetotal} from '../actions/changetotal'; 
import { connect } from 'react-redux';

class Defaultlist extends React.Component {
	render()
	{
		var productarray = this.props.allitems;
		var list = productarray.map((val)=>
			(<div className="item" key={val.key} >
				<div className="itemname">{val.name}</div>
				<div className="itemcost">{val.cost}</div>
				<div className="stock">{val.left}</div>
				<button id={val.key} onClick={()=>this.props.onclick(val)} className="addtocart">Add to cart</button>
			</div>));
		return (
			<div>{list}</div>
		);
	}
}
const mapStateToProps = (state,ownProps) => {
	return{
		allitems:state.itemlist
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
