import React from 'react'; 
import {Dofilter} from '../actions/filter';
import { connect } from 'react-redux';


class Filterinput extends React.Component {
	minval(event) {
		var minval = event.target.val;
		
	}
	maxval(event) {
		var maxval = event.target.val;
		
	}

	render()
	{
		
		var filterfield=
			(	<div>
					Min:<input id="min" type="number" name="min" onchange={this.minval}/><br/>
	            	Max:<input id="max" type="number" name="max" onchange={this.maxval}/><br/>
	            	<button onClick={()=>this.props.onclick(document.getElementById("min").value,document.getElementById("max").value)}>Filter</button>
            	</div>
			);
		return (
			<div>{filterfield}</div>
		);
	}
}
const  mapDispatchToProps = (dispatch, ownProps) => {
	return{
	  	onclick:(min,max)=> {console.log("minmax"+min+max)
	  		dispatch(Dofilter(min,max));
	  		
		}
	};
};

export default connect(null,mapDispatchToProps)(Filterinput); 