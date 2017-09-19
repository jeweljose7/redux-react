import Addtocart from '../actions/addtocart'
import Checkout from '../actions/checkout';

var Addeditems = function Addnewitem(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":    	
    	var currentactionkey = action.key.productID;
    	var flag=1;    	
    	for(var i=0;i<state.length;i++) {
    		if(currentactionkey == state[i].key) {
    			if(state[i].left==1) {
    				state[i].counter++;
	    			state[i].left--;
    				document.getElementById(state[i].key).disabled = true;
    				flag=0
    			}
    			else {
	    			state[i].counter++;
	    			state[i].left--;
	    			flag=0
    			}
    		}
    	}    		
		if(flag==1) {
			var newstate = [...state];
			var newobj = {"key":action.key.productID,"name":action.key.name,"cost":action.key.price,"left":action.key.quantity-1,"counter":1}
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
