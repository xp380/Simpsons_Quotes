import  React  from  'react';

import './Quotes.css'

const  GenerateQuote = ({ selectQuote }) => {
  return (
    <div className="GenerateQuote">
      <button onClick={selectQuote}>Get Quote</button>
    </div>
  );
};

export  default  GenerateQuote;