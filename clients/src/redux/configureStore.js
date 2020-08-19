import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer from '../reducers';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
//export const history = createBrowserHistory({basename: `homepage`});
export const history = createBrowserHistory();
const composeEnhancers = (process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false
}) : compose; // môi trường developer sẽ sử dụng REDUX_DEVTOOLS, môi trườn production sẽ không sử dụng
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
    const middleWare = [sagaMiddleware,routerMiddleware(history),loadingBarMiddleware()]; // danh sách các middleware
    const enhancers = [applyMiddleware(...middleWare)];
    const store = createStore(rootReducer(history),composeEnhancers(...enhancers)); // ... es6 create new array
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;