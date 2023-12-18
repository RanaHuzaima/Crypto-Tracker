import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const fetchdata = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
    );
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      {Object.keys(data).length > 0 ? (
        <div>
          <div className=" flex items-center gap-2 ">
            <img
              src={data.image.small}
              alt={data.id}
              className=" rounded-full w-16"
            />
            <h1 className=" text-2xl font-bold">{data.name}</h1>
          </div>
          <p
            className=" [&>a]:text-blue-400 [&>a]:underline"
            dangerouslySetInnerHTML={{ __html: data.description.en }}
          ></p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CoinDetail;
