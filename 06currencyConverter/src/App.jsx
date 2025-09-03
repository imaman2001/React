import { useState } from 'react'
import InputBox from './components/inputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount , setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  // useCurrencyInfo -> its con't be crash because set their byDefault value
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const handleReset = () => {
    setAmount(0)
    setConvertedAmount(0)
    setFrom("usd")
    setTo("inr")
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat contrast-less:"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/26743048/pexels-photo-26743048.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                    <form      // when this from fire it stores somewhere so we need to convert it , to stop to go anywhere
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency) => {
                                  setFrom(currency)
                                }}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5 cursor-pointer hover:scale-105"
                                onClick={swap}
                            >
                                swap &#8593;&darr;
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={ (currency) => {
                                  setTo(currency)
                                }}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        
                        <div className='flex gap-2 col-end-2'>
                          <button type="submit" className="w-full  bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-800 cursor-pointer">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                          </button>

                        <button className='w-full bg-amber-600 rounded-lg text-white cursor-pointer'  onClick={handleReset}>
                          Reset
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default App
