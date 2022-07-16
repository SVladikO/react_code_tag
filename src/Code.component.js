import React from "react";
const style = {
  wrapper: {
    borderLeft: 'solid 2px #339f33',
    background: '#f7f7f7',
    overflowX: 'scroll',
  },
  row: {
    color: '#cfcfcf',
    margin: '0 4px',
    'WebkitTouchCallout': 'none',

    /* iOS Safari */
    'WebkitUserSelect': 'none',

    /* Safari */
    'khtmlUserSelect': 'none',

    /* Konqueror HTML */
    'MozUserSelect': 'none',

    /* Old versions of Firefox */
    'msUserSelect': 'none',

    /* Internet Explorer/Edge */
    'userSelect': 'none'
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

  },
  pre: {
    padding: '4px 0'
  }
};

function CodeComponent({
  code
}) {
  const rows = String.raw`${code}`.split(/\n/);
  const processedRows = rows.map((row, index) => /*#__PURE__*/React.createElement("div", {
    key: row + index
  }, /*#__PURE__*/React.createElement("span", {
    style: style.row
  }, index + 1), row));
  return /*#__PURE__*/React.createElement("div", {
    style: style.wrapper
  }, /*#__PURE__*/React.createElement("pre", {
    style: style.pre
  }, processedRows));
}

export default CodeComponent;