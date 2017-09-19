import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import Rout from './components/root';
import cartApp from './reducers'
import registerServiceWorker from './registerServiceWorker';


const store = createStore(cartApp);
ReactDOM.render(<Provider store={store}><Rout /></Provider>,
document.getElementById('root'));
registerServiceWorker();





