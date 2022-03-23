import React from 'react';
import "./box.css";


function Box({data}) {
  const price1d = data.priceChange1d<0?"red":"green";
  const price1h = data.priceChange1h<0?"red":"green";
  const price1w = data.priceChange1w<0?"red":"green";
  const prc1hsymbol = data.priceChange1h<0?"⥥":"⥣";
  const prc1dsymbol = data.priceChange1d<0?"⥥":"⥣";
  const prc1wsymbol = data.priceChange1w<0?"⥥":"⥣";

  const wikiurl = "https://en.wikipedia.org/wiki/" + data.name;
  return (
    <div className="parent-box">
    <div className="left-sub-box">
      <div className="icon">
      <img src = {data.icon} />
      </div>
      <span className="coin-name">{data.name} <span className="coin-name">({data.symbol})</span></span>
      <span className="data-element">Coin Rank : <span>{data.rank}</span></span>
    </div>
      <div className="info-block">
        <div className="coloumn">
          <span className="data-element">Real Time Price (USD)<br /><span className="data">&#36; {data.price.toFixed(5)}</span></span>
          <span className="data-element">Market Cap (USD)<br /><span className="data">&#36; {data.marketCap.toFixed(4)}</span></span>
          <span className="data-element">Available Supply<br /><span className="data">{data.availableSupply.toFixed(4)} {data.symbol}</span></span>
          <span className="data-element">Estimated Volume<br /><span className="data">{data.volume}</span></span>
        </div>
        <div className="coloumn">
          <span className="data-element">Price Change (1H)<br /><span className={price1h}>{data.priceChange1h.toFixed(5)} {prc1hsymbol}</span></span>
          <span className="data-element">Price Change (24H)<br /><span className={price1d}>{data.priceChange1d.toFixed(5)} {prc1dsymbol}</span></span>
          <span className="data-element">Price Change (Week)<br /><span className={price1w}>{data.priceChange1w.toFixed(5)} {prc1wsymbol}</span></span>
          <span className="data-element">Exchange Rate (BTC)<br /><span className="data">{data.priceBtc.toFixed(10)}</span></span>
        </div>
        <div className="coloumn">
          <span className="data-element">Official Website<br /><a className="data" href={data.websiteUrl}>Link</a></span>
          <span className="data-element">Twitter URl<br /><a className="data" href={data.twitterUrl}>Link</a></span>
          <span className="data-element">Wiki Url<br /><a className="data" href={wikiurl}>Link</a></span>
          <span className="data-element">Available Supply<br /><span className="data"></span></span>
        </div>
      </div>
    </div>
  );
}

export default Box;
