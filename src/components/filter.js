import React from 'react'; 
import {Dofilter} from '../actions/filter';
import { connect } from 'react-redux';
import {Button} from 'react-materialize'

class Filterinput extends React.Component {
	render()
	{		
		var filterfield=
			(	<div className="filtercontainer">
					<label>From</label><input id="min" type="number" name="min"></input><br/>
	            	<label>To</label><input id="max" type="number" name="max"></input><br/>
	            	<Button onClick={()=>this.props.onclick(document.getElementById("min").value,document.getElementById("max").value)}>Filter</Button>
            	</div>
			);
		return (
			<div>{filterfield}</div>
		);
	}
}
const  mapDispatchToProps = (dispatch, ownProps) => {
	return{
	  	onclick:(min,max)=> {
	  		dispatch(Dofilter(min,max));	  		
		}
	};
};
export default connect(null,mapDispatchToProps)(Filterinput); 