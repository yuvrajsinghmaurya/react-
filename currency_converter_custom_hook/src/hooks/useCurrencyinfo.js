// custom hooks

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

  const [data , setData] = useState({})
  // now here i want to  send data by api call from this function annd i want to call this fuction when
  // page reload that's why i am using useeffect
  // https://latest.currency-api.pages.dev/v1/currencies/usd.json
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`,
    )
    .then((res) => res.json())
    // now hold the api json data on var
    .then((res) =>setData(res[currency]))
    console.log(data)
  }, [currency]);
  return data
}


export default useCurrencyInfo;