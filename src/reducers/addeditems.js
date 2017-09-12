import Addtocart from '../actions/addtocart'
import Checkout from '../actions/checkout';

var Addeditems = function Addnewitem(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
    	
    	var currentactionkey = action.key.key;
    	
    	var flag=1;
    	
    	for(var i=0;i<state.length;i++) {
    		if(currentactionkey == state[i].key) {
    			state[i].counter++;
    			console.log("newobj"+state[i].counter);
    			flag=0
    		}
    	}    		
		if(flag==1) {
			var newstate = [...state];
			var newobj = {"key":action.key.key,"name":action.key.name,"cost":action.key.cost,"counter":1}
			console.log("newobj"+newobj.counter);
			newstate=newstate.concat(newobj);
			return newstate;
		}
		else {
			var newstate = [...state];
			return newstate;
		}
		
	case "CHECKOUT":
		var newstate = [...state];
    	newstate = [];
    	return newstate;
	default:
      return state;
  }
}
export default Addeditems;
