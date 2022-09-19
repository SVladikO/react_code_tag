import React from 'react';
import ReactDOM from 'react-dom/client';

import Code from './Code.component';

const yourCode = function() {
    console.log("hello");
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const style = {
    // codeColor: '#11fffb',
    // borderColor: '#ff0303',
    // backgroundColor: '#4f67d1',
    // rowNumberColor: '#000',
}
root.render(
  <React.StrictMode>
    <div style={{width: '300px'}}>
      <Code code={yourCode} style={style}/>
    </div>
  </React.StrictMode>
);
