//ListComponent

import React, { Component } from 'react';
import './App.css';

//jQuery
import 'jquery/dist/jquery.min.js';

// Datatable modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

import axios from 'axios';

class ListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {data: [],}
    }

    componentDidMount() {
        axios.get('http://localhost/getList.php').then(res => {
            this.setState({data: res.data});
        });
    $(document).ready(function () {
        setTimeout(function(){
            $('#example').DataTable();
        }, 1000);
    });
}
render(){
    return(
        <div className='MainDiv'>
            <div className='jumbotron text-center'>
                <h3>LaraTutorials.com</h3>
            </div>

            <div className='container'>
                <table id='example' class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((result) => {
                            return(
                                <tr>
                                    <td>{result.id}</td>
                                    <td>{result.email}</td>
                                    <td>{result.username}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
}

export default ListComponent;