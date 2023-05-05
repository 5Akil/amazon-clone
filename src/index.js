import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import { StateProvider } from './StateProvider';
import reducer, { initialStatevalue } from './Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialStatevalue} reducer = {reducer} >
     <App/>
    </StateProvider>
  </React.StrictMode>
);


