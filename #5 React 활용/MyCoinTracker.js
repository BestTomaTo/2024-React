import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState(0);
  const [usercoin, setUserCoin] = useState(null);
  const [inverted, setInverted] = useState(true);
  const onChange = (event) => {
    setInput(event.target.value);
  };
  const onClick = () => {
    setInverted((current) => !current);
    setInput(0);
  };
  const UserCoin = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedCoin = coins[selectedIndex];
    setUserCoin(selectedCoin);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins</h1>
      <h2>{inverted ? "USD 2 Coins" : "Coins 2 USD"}</h2>
      {loading ? (
        <strong>Coins</strong>
      ) : (
        <select onChange={UserCoin}>
          {coins.map((coins) => (
            <option key={coins.id}>
              {coins.name} ({coins.symbol}): {coins.quotes.USD.price}USD
            </option>
          ))}
        </select>
      )}
      <hr></hr>
      {usercoin ? (
        <div>
          {" "}
          <input
            value={inverted ? input : input * usercoin.quotes.USD.price}
            id="USD"
            placeholder="USD"
            onChange={onChange}
            disabled={inverted === false}
          />
          <input
            value={inverted ? input * (1 / usercoin.quotes.USD.price) : input}
            id="Coin"
            placeholder="Coin"
            onChange={onChange}
            disabled={inverted === true}
          />
          <button onClick={onClick}>
            {inverted ? "USD 2 Coins" : "Coins 2 USD"}
          </button>{" "}
        </div>
      ) : (
        "Coin is not selected."
      )}
    </div>
  );
}

export default App;
