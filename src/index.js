import React from 'react';
import ReactDOM from 'react-dom/client';

import Code from './Code.component';

const yourCode = function() {
    console.log("hell                               o");
    console.log("hello");
    console.log("hello");
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const style = {
    codeColor: 'yellow',
    borderColor: 'yellow',
    backgroundColor: 'green',
    rowNumberColor: 'red',
}
root.render(
  <React.StrictMode>
    <div style={{width: '300px'}}>
      <Code code={yourCode} style={style}/>
    </div>
  </React.StrictMode>
);
