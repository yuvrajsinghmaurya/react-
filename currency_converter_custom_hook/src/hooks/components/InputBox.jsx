import React, { useId } from 'react'

const InputBox = (
    {lebel , 
    amount,
    onAmountChnage,
    OnCurrencyChange,
    currentcyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,

    className = "",}
) => {

    // this hook is use to generate unique id 
    const amountInpoutId = useId()
    
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
            <label htmlFor={amountInpoutId}  className='text-black/40 mb-2 inline-block'>
                {lebel}
            </label>

            <input type="number"
                    id={amountInpoutId}
                  className="outline-none w-full bg-transparent py-1.5"
                  placeholder='Amount'
                  disabled = {amountDisable}
                  value={amount}
                  onChange={(e)=>{
                    onAmountChnage && onAmountChnage(e.target.value)
                  }}
            
            />
      </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
         className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        name=""
        value={selectCurrency}
        onChange={(e)=>{
            OnCurrencyChange && OnCurrencyChange(e.target.value)
        }}
        disabled = {currencyDisable}
        
        id="">


           {
            currentcyOptions.map((curr)=>{
                // remember the key in react to optimize the performance
                    <option kay={curr} value={curr}>
                         {curr}
                    </option>
            })
           }

        </select>


    </div>


    </div>
  )
}

export default InputBox
