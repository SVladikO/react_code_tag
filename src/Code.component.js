import React from "react";
const getStyle = (
    codeColor,
    borderColor,
    rowNumberColor,
    backgroundColor,
) => ({
  wrapper: {
    borderLeft: `solid 2px ${borderColor}`,
    background: backgroundColor,
    position: 'relative',
    color: codeColor,
    padding: '1px 0',
  },
  rowContent: {
    padding: "0 30px 0 18px",
  },
  rowNumber: {
    color: rowNumberColor,
    padding: '0 4px',
    position: 'absolute',
    background: backgroundColor,
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none', /* iOS Safari */
    'khtmlUserSelect': 'none', /* Safari */
    'MozUserSelect': 'none', /* Konqueror HTML */
    'msUserSelect': 'none', /* Old versions of Firefox */
    'userSelect': 'none' /* Internet Explorer/Edge */
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  },
  pre: {
    padding: '4px 0',
    margin: '3px 0',
    overflowX: 'auto',
  },
  copyButton: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    fontSize: '8px',
    opacity: 0.6
  }
 }
);

function CodeComponent(props) {
  const rows = String.raw`${props.code}`.split(/\n/);

  const {
    codeColor = '#000',
    borderColor = '#339f33',
    rowNumberColor = '#cfcfcf',
    backgroundColor = '#f7f7f7'
  } = props.style || {};

  const style = getStyle(
      codeColor,
      borderColor,
      rowNumberColor ,
      backgroundColor,
  );

  const [copyCodeTitle, setCopyCodeTitle] = React.useState('Copy')
  const copyCode = () => {
    navigator.clipboard.writeText(props.code)
    setCopyCodeTitle('Copied!')
    setTimeout(() => setCopyCodeTitle('Copy'), 1500)
  }

  const processedRows = rows.map(
      (rowCode, index) =>
          React.createElement(
            "div",
            {key: rowCode + index},
            React.createElement("span", {style: style.rowNumber}, index + 1),
            React.createElement("span", {style: style.rowContent}, rowCode),
          )
  );

  return React.createElement("div", {style: style.wrapper},
             React.createElement("button", {style: style.copyButton, onClick: copyCode}, copyCodeTitle),
             React.createElement("pre", {style: style.pre},
                 processedRows,
             )
         );
}

export default CodeComponent;