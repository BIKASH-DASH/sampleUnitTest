import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Stack from './components/Stack'
import {createStore} from 'redux'
import rootReducer from './reducers'
import {setStack} from './actions'
import {Provider} from 'react-redux'
import './index.css'


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>{ console.log('store',store.getState()); });
store.dispatch(setStack({id:0,name:'bikash'}));
ReactDom.render(
<Provider store={store}>
<BrowserRouter>
<Switch>
    <Route path='/' exact component={App}  />
    <Route path='/stack' exact component={Stack}  />
</Switch>
</BrowserRouter>
</Provider>
, document.getElementById('root'));
