import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = (window.devToolsExtension
	? window.devToolsExtension()(createStoreWithMiddleware)
	: createStoreWithMiddleware)(reducers);

export default store;
