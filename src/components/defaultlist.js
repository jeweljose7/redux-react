import React from 'react'; 
import {Addtocart} from '../actions/addtocart'; 
import {Initialstate} from '../actions/initialstate'; 
import {Changetotal} from '../actions/changetotal'; 
import { connect } from 'react-redux';
import {Col, CardPanel} from 'react-materialize'
import {Button} from 'react-materialize'
import axios from 'axios'


class Defaultlist extends React.Component {
	componentWillMount(){		
		this.props.initialdata();
	}
	render()
	{	console.log("allitems--------->",this.props.allitems)
		var min=parseInt(this.props.filter.min);
		var max=parseInt(this.props.filter.max);
		var productarray = this.props.allitems;
		var list = productarray.map((val)=> {
			if(min<=val.price && max>=val.price) {
				return(
					<Col s={12} m={5}>
						<CardPanel className="blue-grey darken-1 white-text">
							<span>
							<div className="item CardPanel" key={val.productID} >
								<div className="itemname">{val.name}</div>
								<div className="itemcost">{val.price}</div>
								<div className="stock">{val.quantity}</div>
								<Button className="add-button" id={val.productID} onClick={()=>this.props.onclick(val)} className="addtocart">Add to cart</Button>
							</div>
							</span>
						</CardPanel>
					</Col>
				);					
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
			axios.post('http://localhost:8000/add_to_cart', {				
				item: key
			})
			.then(function (response) {				
				dispatch(Addtocart(key));
	  			dispatch(Changetotal(key));
			})
			.catch(function (error) {
				console.log(error);
			});	  		
		},
		initialdata:()=>{
			axios.get('http://localhost:8000/productListing')		
			.then(function(response) {				
				dispatch(Initialstate(response.data.result));				
			});			
		}
	};
};
export default connect(mapStateToProps,mapDispatchToProps)(Defaultlist);
