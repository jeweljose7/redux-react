import Addtocart from '../actions/addtocart'

var Itemlist= function productarray( state =  [
	{
		name:"Apple iphone 5S",
		cost:700,
		totnum:10,
		left:10,
		key:1
	},
	{
		name:"WROGN man shirts",
		cost: 1200,
		totnum:10,
		left:10,
		key:2
	},
	{
		name:"LP jeans",
		cost:1200,
		totnum:10,
		left:10,
		key:3
	}],action)
	{
		switch (action.type) {
		    case "CHANGE_TOTAL":   
		    	var newstate = [...state];
		    	var newproductkey = action.key.key;
		    	for(var i=0;i<3;i++) {
		    		if(state[i].key == newproductkey) {
		    			if(state[i].left==0) {}
		    			else {
		    				state[i].left=state[i].left-1;
		    			}
		    		}
		    	}
		    	return newstate;
		    default:
		      return state;
		  }
		return state;
	}
export default Itemlist