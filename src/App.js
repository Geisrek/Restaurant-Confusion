import Main from './components/MainComponent';
import './App.css';
import React from 'react';
import { Component } from 'react';
import {BrowserRouter} from'react-router-dom'
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
/*const store=ConfigureStore()
<Provider store={store}>
</Provider>*/
const store=ConfigureStore()
class App extends Component{
render() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
     <Main/>
    </div>
    </BrowserRouter>
   </Provider>
  );
}
}
export default App;
