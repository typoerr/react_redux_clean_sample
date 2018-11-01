import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootRefucer from '../modules';

export default () => {
    const middleware = [thunk];
    const enhancer   = applyMiddleware(...middleware);
    return createStore(rootRefucer, {}, enhancer);
};