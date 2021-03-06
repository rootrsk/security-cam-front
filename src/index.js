import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NativeBaseProvider } from 'native-base';
import store from './redux/store'
import  {Provider} from 'react-redux'
import axios from 'axios'
axios.defaults.baseURL = "https://rootrsk-cloudvision.herokuapp.com"
// axios.defaults.baseURL = "http://localhost:3001"
ReactDOM.render(
  <React.StrictMode>
    <NativeBaseProvider>  
      <Provider store = {store}>
        <App/>
      </Provider>
    </NativeBaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
