import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
// import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CookieContainer from './components/CookieContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <NewCakeContainer />
        <IceCreamContainer />
        <CookieContainer />
      </div>
    </Provider>
  );
}

export default App