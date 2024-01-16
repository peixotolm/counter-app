import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './app.js';
import TraceProvider from './trace-provider.js';



ReactDOM.render(
  <React.StrictMode>
    <TraceProvider>
      <CounterApp />
    </TraceProvider>
  </React.StrictMode>,  
  document.getElementById('root')
);