const fetchListCoinData = async (selectedTime, selectedCurrency) => {
  const options = {
    headers: {
      "x-access-token": import.meta.env.VITE_API_KEY,
    },
  };
  const response = await fetch(
    `https://api.coinranking.com/v2/coins?limit=100&referenceCurrencyUuid=${selectedCurrency}&timePeriod=${selectedTime}`,
    options
  );
  const data = await response.json();
  return data.data.coins;
};

const fetchStatsData = async (selectedCurrency) => {
  const options = {
    headers: {
      "x-access-token": import.meta.env.VITE_API_KEY,
    },
  };
  const response = await fetch(
    `https://api.coinranking.com/v2/stats?referenceCurrencyUuid=${selectedCurrency}`,
    options
  );
  const data = await response.json();
  return data.data;
};

const fetchSingleCoinDetail = async (id, selectedTime, selectedCurrency) => {
  const options = {
    headers: {
      "x-access-token": import.meta.env.VITE_API_KEY,
    },
  };
  const response = await fetch(
    `https://api.coinranking.com/v2/coin/${id}?referenceCurrencyUuid=${selectedCurrency}&timePeriod=${selectedTime}`,
    options
  );
  const data = await response.json();
  return data.data.coin;
};

const fetchSingleCoinHistory = async (id, selectedTime, selectedCurrency) => {
  const options = {
    headers: {
      "x-access-token": import.meta.env.VITE_API_KEY,
    },
  };
  const response = await fetch(
    `https://api.coinranking.com/v2/coin/${id}/history?referenceCurrencyUuid=${selectedCurrency}&timePeriod=${selectedTime}`,
    options
  );
  const data = await response.json();
  return data.data.history;
};

export {
  fetchListCoinData,
  fetchStatsData,
  fetchSingleCoinDetail,
  fetchSingleCoinHistory,
};
