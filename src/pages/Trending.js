import { data } from "autoprefixer";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TrendingContext } from "../context/TrendingContext";
import TrendingCoin from "./../components/TrendingCoin";

const Trending = () => {
  const { trendData, resetTrendingResult } = useContext(TrendingContext);

  return (

    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <div className="w-full min-h-[60vh] py-8 flex flex-wrap max-lg:flex-col max-lg:items-center justify-evenly  border border-gray-100 rounded">
        {trendData &&
          trendData.map((coin) => (
            <TrendingCoin key={data.coin_id} data={coin.item} />
          ))}
      
      </div>
      <Outlet />
    </section>
  );
};

export default Trending;