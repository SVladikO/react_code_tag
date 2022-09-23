import React from 'react'
import PropTypes from "prop-types"


const getStyle = (
  codeColor,
  borderColor,
  rowNumberColor,
  backgroundColor
) => ({
  wrapper: {
    borderLeft: `solid 2px ${borderColor}`,
    background: backgroundColor,
    position: 'relative',
    color: codeColor,
    padding: '1px 0'
  },
  rowContent: {
    padding: '0 30px 0 26px'
  },
  rowNumber: {
    color: rowNumberColor,
    padding: '0 4px',
    position: 'absolute',
    background: backgroundColor,
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none', /* iOS Safari */
    khtmlUserSelect: 'none', /* Safari */
    MozUserSelect: 'none', /* Konqueror HTML */
    msUserSelect: 'none', /* Old versions of Firefox */
    userSelect: 'none' /* Internet Explorer/Edge */
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  },
  pre: {
    padding: '4px 0',
    margin: '3px 0',
    overflowX: 'auto'
  },
  copyButton: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    fontSize: '8px',
    opacity: 0.6
  }
})

/**
 * React component
 * @component
 *
 *
 * @param props {object} {code, style}
 * @returns {React.DetailedReactHTMLElement<{HTMLElement>}
 * @constructor
 * @author Vlad Serhiichuk @mail.com
 * @example
 * const style = {
 *   codeColor: '#11fffb',
 *   borderColor: '#ff0303',
 *   backgroundColor: '#4f67d1',
 *   rowNumberColor: '#000'
 * }
 *
 * function hi() {
 *     console.log('hi')
 * }
 * <CodeComponent code={hi} style={style} />
 */
function CodeComponent (props) {
  const rows = String.raw`${props.code}`.split(/\n/)

  const {
    codeColor = '#000',
    borderColor = '#339f33',
    rowNumberColor = '#cfcfcf',
    backgroundColor = '#f7f7f7'
  } = props.style || {}

  const style = getStyle(
    codeColor,
    borderColor,
    rowNumberColor,
    backgroundColor
  )

  const [copyCodeTitle, setCopyCodeTitle] = React.useState('Copy')
  const copyCode = () => {
    navigator.clipboard.writeText(props.code)
    setCopyCodeTitle('Copied!')
    setTimeout(() => setCopyCodeTitle('Copy'), 1500)
  }

  const processedRows = rows.map(
    (rowCode, index) =>
      React.createElement(
        'div',
        { key: rowCode + index },
        React.createElement('span', { style: style.rowNumber }, index + 1),
        React.createElement('span', { style: style.rowContent }, rowCode)
      )
  )

  return React.createElement('div', { style: style.wrapper },
    React.createElement('button', { style: style.copyButton, onClick: copyCode }, copyCodeTitle),
    React.createElement('pre', { style: style.pre },
      processedRows
    )
  )
}

CodeComponent.propTypes = {
  /**
   * Code which we will show
   */
  code: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bigint,
    PropTypes.bool,
    PropTypes.func,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
    PropTypes.symbol
  ]).isRequired,
  /**
   * Custom style
   */
  style: PropTypes.object
}

export default CodeComponent
