import { useState, useEffect } from "react";
import useStockData from "./UseStockHook";

export default function ShowStockPrice() {
    var [sbiStockData] = useStockData("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
    var [sobhaStockData] = useStockData("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SD6");
    var [hclStockData] = useStockData("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/HCL02");

    return (
        <>
            <h1>Stock Name: {sbiStockData.stockName}</h1>
            <h2>Stock Price: {sbiStockData.stockPrice}</h2><hr/>

            <h1>Stock Name: {sobhaStockData.stockName}</h1>
            <h2>Stock Price: {sobhaStockData.stockPrice}</h2><hr/>

            <h1>Stock Name: {hclStockData.stockName}</h1>
            <h2>Stock Price: {hclStockData.stockPrice}</h2><hr/>
        </>
    )
}