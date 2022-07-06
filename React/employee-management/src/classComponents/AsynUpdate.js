import React from 'react';
import { render } from 'react-dom';

export default class AsynUpdate extends React.Component {
    constructor() {
        super();  
        debugger;  
        this.state = {
            counter: 1
        }
    }

    render() {
        debugger;
        return <h1>The Counter Value is {this.state.counter}</h1>
    }

    componentDidUpdate() {
        console.log("Component Updated...");
        debugger;
    }

    componentDidMount() {
        debugger;
        this.updateFrequestly();
    }

    updateFrequestly = () => {
        for(var i = 0; i< 100000; i++) {
            this.setState({
                counter: i
            });
        }
    }

    myFunction = () => {
        this.setState({
            counter:  this.state.counter +  2
        })

        this.setState({
            counter:  this.state.counter +  3
        })

        this.setState({
            counter:  this.state.counter +  4
        })

        this.setState({
            counter:  this.state.counter +  5
        })
    }


    myFunctionOther = () => {
        debugger;
        this.setState({
            counter:  this.state.counter + 1
        }, function() {
            debugger;
            this.setState({
                counter:  this.state.counter +  3
            }, function() {
                debugger;
                this.setState({
                    counter:  this.state.counter +  4
                }, function() {
                    debugger;
                    this.setState({
                        counter:  this.state.counter +  5
                    })
                })
            })
        });
    }
}
