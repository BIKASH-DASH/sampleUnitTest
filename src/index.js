import React from 'react'
import reactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Stack from './components/Stack'
reactDom.render(<BrowserRouter>
<Switch>
    <Route path='/' exact component={App}  />
    <Route path='/stack' exact component={Stack}  />
</Switch>
</BrowserRouter>, document.getElementById('root'));
