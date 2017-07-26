import React, { Component } from 'react';
import StockSection from './stocks/StockSection.jsx';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StockSection items={this.props.items}
          addItem={this.props.addItem}   />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    items: state.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);