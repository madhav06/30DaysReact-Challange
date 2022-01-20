import React from 'react';
import './App.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props);

            //getHeader
            this.getHeader = this.getHeader.bind(this);

            //getRowData
            this.getRowData = this.getRowData.bind(this);

            //getKeys
            this.getKeys = this.getKeys.bind(this);
    }

    getKeys = function() {
        return Object.keys(this.props.data[0]);
    }

    getHeader = function() {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}> {key.toUpperCase()}</th>
        })
    }

    getRowData = function() {
        var items = this.props.data;
        var keys = this.getKeys;

        return items.map((row, index) => {
            return <tr key={index}>
                <RenderRow key={index} data={row} keys={keys} />
            </tr>
        })
    }

    render() {
        return(
            <div>
            <table>
            <thead>
                <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
                {this.getRowsData()}
            </tbody>
            </table>
            </div>
        );
    }
}

const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}