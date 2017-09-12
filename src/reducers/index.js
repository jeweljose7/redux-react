import { combineReducers } from 'redux';
import itemlist from './itemlist';
import addeditems from './addeditems'
import total from './total'


const cartApp = combineReducers({
  itemlist,
  addeditems,
  total

  
})
export default cartApp