import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const result = await axios.get('https://api.quotable.io/random');
      setQuote(result.data.content);
    };
    fetchQuote();
  }, []);

  const handleClick = () => {
    axios.get('https://api.quotable.io/random')
      .then(response => setQuote(response.data.content))
      .catch(error => console.log(error));
  };



  const [gradient, setGradient] = useState(getRandomGradient());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradient(getRandomGradient());
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  function getRandomGradient() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 50) + 50;
    const lightness = Math.floor(Math.random() * 25) + 25;
    const opacity = Math.floor(Math.random() * 50) + 50;
    return `linear-gradient(to right, hsl(${hue}, ${saturation}%, ${lightness}%), hsl(${hue + 30}, ${saturation}%, ${lightness}%, ${opacity}%)`;
  }





  return (
    <div className="quotes-container" style={{ background: gradient }}>
      <div className="quote-wrapper">
        <p className="quote-text"><b>" {quote} "</b></p>
        <button className="quote-button" onClick={handleClick}>New Quote</button>
      </div>
    </div>
  );
}

export default Quotes;



