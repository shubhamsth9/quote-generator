import './styles.css';
import { useState, useEffect } from 'react';

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((json) => {
      setQuotes(json);
      setQuote(json[0]);
    });
  }, []);

  const text = quote?.text;
  const author = (quote?.author) ? quote?.author : "";

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }


  return (
    <div className="App">
      <div className='header'>
        <h1>Namaste🙏</h1>
        <h2>Welcome to Random Quotes Generator!</h2>
      </div>
      <section className='quote'>
        <h3>
          <span>"</span>
          {text}
          <span>"</span>
        </h3>
        <i>~{author.split(',')[0]}</i>
      </section>
      <button className='button-5' onClick={getNewQuote}>Refresh</button>
    </div>
  );
}

export default App;
