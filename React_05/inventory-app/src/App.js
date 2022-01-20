import logo from './logo.svg';
import './App.css';
import React from 'react';
import Table from './Table';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: [
        {
          'fruit': 'Apple', 'cost': 100
        },
        {
          'fruit': 'Orange', 'cost': 50
        },
        {
          'fruit': 'Banana', 'cost': 40
        },
        {
          'fruit': 'Guava', 'cost': 21
        },
        {
          'fruit': 'Maongo', 'cost': 49
        }
      ],

      tableData2: [
        {
          'vegetable': 'bhindi', 'cost': 32
        },
        {
          'vegetable': 'karela', 'cost': 43
        },
        {
          'vegetable': 'gobi', 'cost': 80
        },
        {
          'vegetable': 'parwal', 'cost': 70
        },
        {
          'vegetabkle': 'matar', 'cost': 50
        }
      ]
    }
  }

    render() {
      return (
        <div>
        <br /> Table 1 data 
        <Table data={this.state.tableData} />

        <br /> Table 2 data 
        <Table data={this.state.tableData2} />
        </div>
      );
    }
  
}
