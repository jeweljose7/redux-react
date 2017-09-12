import React from 'react'; 
import { connect } from 'react-redux';

const mapStateToProps = (state,ownProps) => {
	return{
		totalval:state.total,
	};
}
class Total extends React.Component {
	render()
	{
		return <div>{this.props.totalval.total}</div>
	}
}
export default connect(mapStateToProps)(Total);