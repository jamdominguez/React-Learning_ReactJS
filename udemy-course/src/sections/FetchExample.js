import React, {Component} from 'react';

export default class FetchExample extends Component{
    constructor(props){
        super(props);
        this.state = {
            bpi: {}
        }
    }
    renderCurrencies(){
        const {bpi} = this.state; 
        console.log(bpi);
        const currency = Object.keys(bpi);
        return currency.map(currency=>(            
            <div key={currency}>
                1 BTC is {bpi[currency].rate_float}
                <span>{currency} - {bpi[currency].description}</span>
            </div>
        ))
    }
    // The best place to recover data    
    componentDidMount(){
        console.log('FetchExample - componentDidMount');
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res=>res.json())//convert the response in json (promise response)
        .then(data=>{ //(promise response)
            console.log(data);
            const {bpi} = data;
            this.setState({bpi})
        });
    }
    render(){
        console.log('FetchExample - render');
        return(
            <div>
                <h4>Fetch Example</h4>
                {this.renderCurrencies()}
            </div>
        )        
    }
}