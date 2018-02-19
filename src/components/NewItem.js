import React, { Component } from 'react';

class NewItem extends Component {
    constructor() {
        super()

        this.state = {
            input: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        }) 
    }

    submitItem = () => {
        this.props.addItem(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <form className="NewItem">
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button type="button" onClick={this.submitItem}>Add</button>
            </form>
        );
    }
}

export default NewItem;
