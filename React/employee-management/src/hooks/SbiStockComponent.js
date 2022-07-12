import { useState, useEffect } from "react";
import Axios from "axios";

export default function SbiStockComponent() {
    var [stockData, setStockData] = useState({
        stockName: "",
        stockPrice: 450,
        priceChangePercent: 0,
        dataColor: "green"
    })

    useEffect(() => {
        
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((response) => {

                setStockData((stockData) => {
                    console.log(stockData.stockPrice)
                    if(stockData.stockPrice > response.data.data.pricecurrent) {
                        return {
                            stockPrice: response.data.data.pricecurrent,
                            priceChangePercent: response.data.data.pricepercentchange,
                            dataColor: "red",
                            stockName: response.data.data.SC_FULLNM
                        }
                    } else {
                        return {
                            stockPrice: response.data.data.pricecurrent,
                            priceChangePercent: response.data.data.pricepercentchange,
                            dataColor: "green",
                            stockName: response.data.data.SC_FULLNM
                        }
                    }
                })

                
            })
        }, 5000)
    }, [])

    return (
        <div style={{padding: "10px", margin: "10px", color: stockData.dataColor}}>
            <h1>Stock Price for {stockData.stockName} is <label>{stockData.stockPrice}</label></h1>
            <h2>Price Percent Change <label>{stockData.priceChangePercent}</label></h2><hr/>
        </div>
    )
}