import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './components/App';
import cartApp from './reducers'
import registerServiceWorker from './registerServiceWorker';


const store = createStore(cartApp);
ReactDOM.render(<Provider store={store}><App /></Provider>,
document.getElementById('root'));
registerServiceWorker();





