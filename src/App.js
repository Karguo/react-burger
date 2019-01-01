import React, { Component } from 'react';
import './App.css';
import Layer from './Layer'

class App extends Component {

  constructor() {
    super()
    // this.handleClick = this.handleClick.bind(this)
    this.state = {
      options: ['cheese', 'tomato', 'bun', 'beef', 'lettuce'],
      layers: [],
      count: 0
    }
  }

  onAdd = (option) => {
    // making copies in javascript
    // const newLayers = this.state.layers.slice(0) // slice is making a copy of the existing array from the current array starting from index 0
    // const newLayers = [...this.state.layers] // array spread
    // const newLayers = Array.from(this.state.layers)
    // newLayers.push('new layer')
    this.setState({
      layers: [...this.state.layers, option], // 'new layer' can be before or at the end
      count: this.state.count + 1
    })
  }

  onRemove = (targetIndex) => {
    this.setState({
      layers: this.state.layers.filter((_, index) => index !== targetIndex),
      count: this.state.count - 1
    })
  }

  // renderLayer = (layer, index) => {
  //   return <Layer label={layer} />
  //     <div>
  //       <div
  //         onClick={() => this.onRemove(index)} 
  //         key={index} 
  //         className={`layer ${layer}`}>
  //           {layer}
  //       </div>
  //     </div>
    
  // }

  renderOption = (option, index) => {
    return <button 
      onClick={() => this.onAdd(option)}
      key={index}>
        {option}
      </button>
  }

  renderCounter() {
    if (this.state.count === 1) {
      return (
        <p>1 layer</p>
      );
    } else {
      return (
        <p>{this.state.count} layers</p>
      );
    }
  }

  renderCheese() {
    if (this.state.options !== 'cheese') {
      return (null);
    } else {
      return ( 
      <p> with single layer of cheese</p> 
      );
    }
  }

  render() {
    const { layers, options } = this.state
    return (
      <div className="App">
        
        <div className="options">
          {/* <button onClick={() => this.onAdd('tomato')}>tomato</button>
          <button onClick={() => this.onAdd('cheese')}>cheese</button>
          <button onClick={() => this.onAdd('pineapple')}>pineapple</button> */}
          {/* {options.map(option => <button>{option}</button>)} - would need to hv {options} inside const above as well */}
          {options.map(this.renderOption)}
        </div>

        <div className="plate">
          {layers.map((layer, i) => 
            <Layer
              key={i} 
              index={i}
              name={layer} 
              onRemove={() => this.onRemove(i)} 
            />)}
          {/* {layers.map(this.renderLayer)} */}
        </div>

        <div className="counter">
          <p>{this.renderCounter()} {this.renderCheese()}</p>
        </div>
        
      </div>
    );
  }
}


export default App;


