import React from 'react';
import {Pre, RowNumber, Wrapper} from "./Code.style";

function CodeComponent({code}) {
  const processedCode = String.raw`${code}`;
  const rows = processedCode.split(/\n/);

  const processedRows = rows.map((row, index) => <div key={row+index}><RowNumber>{index + 1}</RowNumber>{row}</div>)

  console.log({rows})
  return (
    <Wrapper>
      <Pre>
        {processedRows}
      </Pre>
    </Wrapper>
  );
}

export default CodeComponent;

