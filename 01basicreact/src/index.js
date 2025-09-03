import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// we create a custom reactDOM , this is React's own DOM that manipulate the whole react app 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);


