import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './scss/index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
