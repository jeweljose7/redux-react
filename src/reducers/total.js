import Changetotal from '../actions/changetotal';
import Checkout from '../actions/checkout';

var Updatetotal = function Findnewtotal(state = {total:0}, action) {
  switch (action.type) {
    case "CHANGE_TOTAL":   
    	var newstate = {...state};
    	var productprice = action.key.cost;
    	newstate.total = newstate.total+productprice;
    	console.log("keeey-->"+action.key.cost)
    	return newstate;
    case "CHECKOUT":
		var newstate = [...state];
    	newstate.total = state.total;
    	return newstate;
	default:
      return state;
  }
}
export default Updatetotal;   		