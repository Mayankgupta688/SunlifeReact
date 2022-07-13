import { useState, useEffect } from "react";
import Axios from "axios"

export default function useStockData(stockUrl) {
    var [stockData, setStockData] = useState({
        stockName: "",
        stockPrice: 0
    })

    useEffect(() => {
        setInterval(() => {
            Axios.get(stockUrl).then((response) => {
                setStockData(() => {
                    return {
                        stockName: response.data.data.SC_FULLNM,
                        stockPrice: response.data.data.pricecurrent
                    }
                })
            })
        }, 1000)
    }, [])

    return [stockData]
}