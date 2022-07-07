import React from 'react';
import ReactDOM from 'react-dom/client';

import Code from './Code.component';

const code = `// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{width: '600px'}}>
      <Code code={code}/>
    </div>
  </React.StrictMode>
);
