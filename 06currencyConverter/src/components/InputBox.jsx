import { useId } from "react";

// these all are parameters in function
function InputBox({
    label,      // from - to
    amount,
    onAmountChange, // this is method
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    
    className = "",     // it is only if when any user want to update on UI
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-slate-200 p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">

                <label htmlFor={amountInputId} 
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input
                    id={amountInputId}  // it help t generate unique id 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // first onAmountChange is a checker and second is return any value surely       // (&&) if its available then we change
                    onChange = { (e)=> onAmountChange && onAmountChange(Number(e.target.value))}        // it is empty onAmountChange function sometime it may be crashed
                />                                  
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                        
                        {currencyOption.map( (currency) => (    // here currency is the index
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;