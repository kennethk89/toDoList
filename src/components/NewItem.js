import React, { Component } from 'react';

class NewItem extends Component {
    
    render() {
        return (
            <form className="NewItem">
                <input type="text" value={this.props.input}
                    onChange={this.props.handleChange} />
                <button type="button" onClick={this.props.submitItem}>Add</button>
            </form>
        );
    }
}

export default NewItem;
