import { useEffect, useState } from "react";

const useCurrencyInfo = (currency: string): currencyDataType => {
  const [currencyData, setCurrencyData] = useState<currencyDataType>({});
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setCurrencyData(res[currency]));
  }, [currency]);

  return currencyData;
};

export default useCurrencyInfo;
