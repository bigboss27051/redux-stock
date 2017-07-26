import React , {Component} from 'react';
import Stock from './Stock.jsx';

class StockList extends Component {
    render(){
        return(
            <ul>
                {
                    this.props.items.map( i => 
                        <Stock key={i.id} item={i} />
                    )
                }
            </ul>
        )
    }
}

export default StockList;