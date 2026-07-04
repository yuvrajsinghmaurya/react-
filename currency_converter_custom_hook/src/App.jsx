import React, { useEffect, useState } from 'react'
import InputBox from './hooks/components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyinfo'

const App = () => {

  const [amount , setAmount] = useState(0)
  const [from , setFrom]  = useState('usd')
  const [to , setTo ] = useState('inr')

  const [convertedamount , setConvertedammount] = useState(0)

  // now use coustom hooks

  const currencyInfo = useCurrencyInfo(from)
  // now get  the all keys of json obj 
  const options = Object.keys(currencyInfo)

  // now swap the currency 
  const swap  = ()=>{
      setFrom(to)
      setTo(from)
      setConvertedammount(amount)
      setAmount(convertedamount)
  }

    const convert = ()=>{
      setConvertedammount(amount * currencyInfo[to])
    }
   return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{backgroundImage:`url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}
    >
      <div className="w-full">

        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

        <form 
        // when form  will submit it will try to go , i do not want i want prevent so 
        onSubmit={(e)=>{
          e.preventDefault();
          // now call conveter 
          convert()
        }}
        
        >

             <div className="w-full mb-1">
              <InputBox
              label= 'from'
              amount={amount}
              currentcyOptions={options}
              OnCurrencyChange={(currency)=>setAmount(amount)}
              selectCurrency={from}
              onAmountChnage={(amount)=>
                setAmount(amount)
              }

              
              />
            </div>
              <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>

              <div className="w-full mt-1 mb-4">
                <InputBox
                 label= 'To'
              amount={convertedamount}
              currentcyOptions={options}
             OnCurrencyChange={(currency)=>{
              setTo(currency)
             }

             }
              selectCurrency={from}
              amountDisable

                
                />
              </div>
            

             <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">

              convert {`${from.toLocaleUpperCase()} to ${to.toLocaleUpperCase()}`}
             </button>
        </form>
        </div>

      </div>

      
    </div>
  )
}

export default App
