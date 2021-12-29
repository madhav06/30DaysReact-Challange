import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', age: '', gender: ''};
    }

    handleChange = (event) => {
        this.setState({[ event.target.name ]: event.target.value});
        this.setState({[ event.target.age ]: event.target.value});
        this.setState({[ event.target.gender ]: event.target.value});
    }

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);

        fetch('http://localhost:3000/store-data', {
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response)
            return response.json();
        });

        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />   
                </label>
                <hr/>
                <label>
                    Age:
                    <input type="text" value={this.state.value} age="age" onChange={this.handleChange} />   
                </label>
                <hr/>
                <label>
                    Gender:
                    <input type="text" value={this.state.value} gender="gender" onChange={this.handleChange} />   
                </label>
                <hr/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default MyForm;
