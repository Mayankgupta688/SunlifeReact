import React from 'react';

import StockComponent from "./StockComponent";

export default class StockComponentWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            stockArray: [],
            stockData: ""
        }
    }

    updateValue = (event) => {
        this.setState({
            ...this.state,
            stockData: event.target.value
        })
    }

    addStock = () => {
        this.setState({
            stockArray: [
                ...this.state.stockArray,
                this.state.stockData
            ],
            stockData: ""
        })
    }

    render() {
        return (
            <>
                <h1>Stocks Status for Selected Stocks:</h1>
                <b>Enter Stock Url: </b> <input type="text" value={this.state.stockData} onChange={this.updateValue} />
                <input type="button" value="Submit" onClick={this.addStock} />
            
                {this.state.stockArray.map((url) => {
                    return <StockComponent stockUrl={url}></StockComponent>
                })}
            </>
        )
    }
}