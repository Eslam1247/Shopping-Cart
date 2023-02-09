import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import {BrowserRouter , Link} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './Components/Reducers/index'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

const store = createStore(reducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
            <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'))
