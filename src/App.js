import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import routes from './routes';
import Nav from './components/Nav/Nav';
import store from './redux/store'

function App(props) {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
