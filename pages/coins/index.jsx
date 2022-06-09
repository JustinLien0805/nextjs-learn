import React from "react";
import Axios from "axios";
const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((coin, index) => {
        return (
          <div key={index}>
            <h1>{coin.name}</h1>
            <img src={coin.icon} />
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

// SSG getStaticProps
// SSR getServerSideProps
export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};

export default CoinList;
