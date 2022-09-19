import React from 'react';
import ReactDOM from 'react-dom/client';

import Code from 'react_code_tag';

const yourCode = function() {
    console.log("hello");
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div style={{width: '300px'}}>
      <Code code={yourCode} />
    </div>
  </React.StrictMode>
);
