
var Itemlist = function productarray(state = []	, action) {

	switch (action.type) {
		case "INITIAL": {			
			var newstate = [...state];
			newstate = action.key;			
			return newstate;
		}
		case "CHANGE_TOTAL": {
			var newstate = [...state];
			var newproductkey = action.key.productID;
			for (var i = 0; i < 3; i++) {
				if (state[i].productID == newproductkey) {
					if (state[i].quantity == 0) { }
					else {
						state[i].quantity = state[i].quantity - 1;
					}
				}
			}
			return newstate;
		}
		default: {
			return state;
		}	
	}	
}
export default Itemlist