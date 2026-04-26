// custom hooks

import { useEffect, useState } from "react";

function useCurrencyInfo() {
  // now here i want to  send data by api call from this function annd i want to call this fuction when
  // page reload that's why i am using useeffect
  // https://latest.currency-api.pages.dev/v1/currencies/usd.json
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`,
    );
  }, []);
}
