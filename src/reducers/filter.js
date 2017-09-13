import Dofilter from '../actions/filter';

var Updatefiltervalue = function Filterval(state = {min:0,max:100000}, action) {
  switch (action.type) {
    case "FILTER":   
    	var newstate = {...state};    	
    	newstate.min = action.min;
    	newstate.max =  action.max;console.log("newstate",newstate)
    	return newstate;    
	default:
      return state;
  }
}
export default Updatefiltervalue;  
