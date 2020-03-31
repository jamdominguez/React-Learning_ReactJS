import React, { Component} from 'react';
import BitCoinPricePresentational from './Presentational_Component'

export default class BitCoinPriceContainer extends Component {
  state = { bpi: {} }

  componentDidMount(){    
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res=>res.json())
    .then(data=>{        
        const {bpi} = data;
        this.setState({bpi})
    });
  }

  render(){    
    return(
      <BitCoinPricePresentational bpi={this.state.bpi}/>
    )        
  }
}