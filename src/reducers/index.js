import { combineReducers } from 'redux';
import itemlist from './itemlist';
import addeditems from './addeditems'
import total from './total'
import filter from './filter'

const cartApp = combineReducers({
  itemlist,
  addeditems,
  total,
  filter  
})
export default cartApp