import React , {Component} from 'react';

class Stock extends Component {
    render(){
        return(
            <li>item : {this.props.item.name} value : {this.props.item.value}</li>
        )
    }
}

export default Stock;