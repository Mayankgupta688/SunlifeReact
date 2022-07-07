import React from 'react';
import Axios from "axios";

export default class StockComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            stockName: "",
            stockPrice: 450,
            priceChangePercent: 0,
            dataColor: "green"
        }
    }

    render() {
        return (
            <div style={{padding: "10px", margin: "10px", color: this.state.dataColor}}>
                <h1>Stock Price for {this.state.stockName} is <label>{this.state.stockPrice}</label></h1>
                <h2>Price Percent Change <label>{this.state.priceChangePercent}</label></h2><hr/>
            </div>
        )
    }

    componentDidMount() {

        setInterval(() => {
            Axios.get(this.props.stockUrl).then((response) => {

                if(this.state.stockPrice > response.data.data.pricecurrent) {
                    this.setState({
                        stockPrice: response.data.data.pricecurrent,
                        priceChangePercent: response.data.data.pricepercentchange,
                        dataColor: "red",
                        stockName: response.data.data.SC_FULLNM
                    })
                } else {
                    this.setState({
                        stockPrice: response.data.data.pricecurrent,
                        priceChangePercent: response.data.data.pricepercentchange,
                        dataColor: "green",
                        stockName: response.data.data.SC_FULLNM
                    })
                }
                
            })
        }, 2000)
    }
}