
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useLayoutEffect, useState } from "react";

// create context object
export const CryptoContext = createContext({});

// create the provider component
export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState();
  const [coinData, setCoinData] = useState("");

  const [coinSearch, setCoinSearch] = useState("");

  const [currency, setCurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(15000);
  const [perPage, setPerPage] = useState(10);


  let cache = {}; // In-memory cache
  const CACHE_DURATION = 60 * 1000; // Cache duration in milliseconds (1 minute)
  
  const getCryptoData = async () => {
      const cacheKey = `${currency}_${coinSearch}_${sortBy}_${perPage}_${page}`;
      const currentTime = Date.now();
  
      // Check if data is already in cache and not expired
      if (cache[cacheKey] && currentTime - cache[cacheKey].timestamp < CACHE_DURATION) {
          console.log("Serving from cache");
          setCryptoData(cache[cacheKey].data); // Use cached data
          return;
      }
  
      try {
          // Fetch new data if not in cache or expired
          const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&price_change_percentage=1h%2C24h%2C7d`, {
              method: 'GET',
              headers: {
                  'accept': 'application/json',
                  'x-cg-demo-api-key': 'CG-t9m8rRDCtinZmBuqShE6tmNt'
              }
          }).then(res => res.json());
  
          // Store data in cache with timestamp
          cache[cacheKey] = {
              data: data,
              timestamp: currentTime
          };
  
          setCryptoData(data);
          console.log(data);
      } catch (error) {
          console.log(error);
      }
  };
  

  const getCoinData = async (coinid) => {
      try {
          const data = await fetch(
              `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`,{
                  method: 'GET', // The method type
                  headers: {
                      'accept': 'application/json',
                      'x-cg-demo-api-key': 'CG-1uhAu4A7tTD2wxrvY3JBC3Ka' // Your API key
                    }
                },
                
            ).then((res) => res.json())
            .then((json) => json);
            
        
      setCoinData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchResult = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((json) => json);

      // console.log(data);
      setSearchData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFunction = () => {
    setPage(1);
    setCoinSearch("");
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, page, perPage]);

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchResult,
        setCoinSearch,
        setSearchData,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        totalPages,
        resetFunction,
        setPerPage,
        perPage,
        getCoinData,
        coinData,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};