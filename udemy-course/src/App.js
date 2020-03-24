import React, { Component } from 'react';
import './App.css';
import cars from './data/cars.json'

class CarItem extends Component {
  render(){
    const {car, id} = this.props
    return (
        <li>
              <strong>Key:</strong> {id}
              <strong> Name:</strong> {car.name}
              <strong> Company:</strong> {car.company}
        </li>
    )
  }
}

class App extends Component {
  render() {     
    return (

      <div className="App">
          <h4> Working with lists</h4>
          <ul>
            {
              cars.map(car => {
               return <CarItem key={car.id} car={car} id={car.id}/>
              })
            }
          </ul>
      </div>
    );
  }
}
export default App;