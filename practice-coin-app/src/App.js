import { useEffect, useState } from "react";

function App() {
  const [loading, isLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [select, onSelect] = useState('');
  const [count, setCount] = useState(0)
  const [coinq, setCoinq] = useState(0)
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        isLoading(false);
      });
  }, []);

  const handleChangeCoin= (event) => {
    console.log(event.target.value)
    onSelect(event.target.value)
  }

  const handleChange = (event) => {
    if(select === '') return;
    const coinValue = Number(select.split(' ')[2].slice(1,));
    const coinRatio = event.target.value / coinValue;
    setCount(coinRatio);
  }

  const handleKeyUp = (e) => {
    if(e.key === 'Enter'){
      setCoinq(count)
    }
  }

  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ?
        <strong>Loading...</strong>
        :
        <div>
          <select onChange={handleChangeCoin}>
            <option>Select the Coin</option>
            {coins.map((coin, idx, arr) =>
              <option key={idx}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>)}
          </select>
          <hr/>
          <input type="number" onChange={handleChange} onKeyUp={handleKeyUp} placeholder="Write your USD!"/>
          <h3>{coinq} coin</h3>
        </div>
      }
    </div>
  );
}

export default App;
