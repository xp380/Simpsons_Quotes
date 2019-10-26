import  React  from  'react';

import './Quotes.css'

const  DisplayQuote = ({quote}) => {
  return (
    <div className="DisplayQuote">
      <img className="imgQuote" src={quote.image} alt="quote character"  />
      <div>
        <blockquote>{quote.quote}</blockquote>
        <span>{quote.character}</span>
      </div>
    </div>
  );
};

export default DisplayQuote;