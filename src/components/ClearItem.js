import React, { Component } from 'react';

class ClearItem extends Component {
    render() {
        return (
            <div className="ClearItem">
                <button type="button" onClick= {()=> {this.props.clearItem(this.props.id)}}>Delete task</button>
            </div>
        );
    }
}

export default ClearItem;
