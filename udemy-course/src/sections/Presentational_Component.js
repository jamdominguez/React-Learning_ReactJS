import React from 'react';

export default function BitCoinPricePresentational(props) {
    function _renderCurrencies() {
        const {bpi} = props;     
        const currencies = Object.keys(bpi);
        return currencies.map(currency=>(            
            <div key={currency}>
                1 BTC is {bpi[currency].rate_float}
                <span>{currency} - {bpi[currency].description}</span>
            </div>
        ));
      };
    
    return (
    <div>
        <h4>BitCoinPrice List</h4>
        {_renderCurrencies()}
    </div>
    )    
}