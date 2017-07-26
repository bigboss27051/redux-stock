import React, {Component} from 'react';

class StockForm extends Component {
    onSubmit(e){
        e.preventDefault();
        let nodeName = this.refs.itemName;
        let nodeValue = this.refs.itemValue;
        let itemName = nodeName.value;
        let itemValue = nodeValue.value;
        let dataItem = {name:itemName,value:itemValue};
        
        this.props.addItem(dataItem);
        
        nodeName.value = '';
        nodeValue.value = '';
    }
    
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                Item : <input type='text' ref='itemName' />    
                Value : <input type='text' ref='itemValue' />  
                <button type='submit' >Submit</button> 
            </form>
        )
    }
}


export default StockForm;