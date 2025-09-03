import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data , setData] = useState( {} )
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then( (res)=> res.json())
        .then( (res)=> setData(res[currency]))
        console.log(data);
    }, [currency])      // it is dependency and i want run again after change their state
    console.log(data)
    return data
}

export default useCurrencyInfo;