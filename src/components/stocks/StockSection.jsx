import React ,{Component} from 'react';
import StockList from './StockList.jsx';
import StockForm from './StockForm.jsx';

class StockSection extends Component {
    render(){
        return(
            <div>
                <StockList items={this.props.items}  />
                <StockForm addItem={this.props.addItem} />
            </div>
        )
    }
}

export default StockSection;