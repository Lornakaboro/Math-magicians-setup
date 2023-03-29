import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { RiLoader4Line } from 'react-icons/ri';

function QuoteGenerator() {
  const [quoteData, setQuoteData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = '3s3I81LpJxpp0MD46Yqweg==utIo6B2WhXAtvPcj';
  const category = 'happiness';

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': API_KEY,
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setQuoteData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuoteData, setIsLoading]);

  if (hasError) {
    return (
      <div>
        <p className="error">There has been an error!</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <div className="spinner"><RiLoader4Line size={70} /></div>
      </div>
    );
  }

  return (
    <section>
      <div id="quote-box">
        {quoteData.map((quote) => (
          <blockquote key={quoteData.indexOf(quote)} className="quote-block">
            <p className="quote-text">
              <FaQuoteLeft size={42} />
              <span id="text" className="text">{quote.quote}</span>
            </p>
            <footer className="quote-author" id="author">
              {quote.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default QuoteGenerator;
