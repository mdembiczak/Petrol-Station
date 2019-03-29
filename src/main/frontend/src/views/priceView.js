import React, { Component } from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import '../styles/priceView.css';
import _ from 'lodash';

class priceView extends Component {
  constructor(props) {
   super(props);

   this.state = {
     array: []
   };

   this.renderPrices = this.renderPrices.bind(this);
 }

 componentDidMount(){
   axios
     .get('localhost:8080/prices')
     .then(({ data })=> {
       console.log(data);
       this.setState(
         { array: data.prices }
       );
     })
     .catch((err)=> {})
 }

 render() {
   console.log(this.state.array);
   return(
     <div>
       <h3>Prices</h3>
       <ul className="list-group">
          {this.renderPrices()}
       </ul>
     </div>
   );
 }

 renderPrices() {
   console.log(this.state.array);
   return _.map(this.state.array, price => {
     return (
       <li className="list-group-item" key={price.fuelType}>
           {price.fuelType}
       </li>
     );
   });
 }
}

export default priceView;
