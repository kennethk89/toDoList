import React, { Component } from 'react';

class EachItem extends Component {

    render() {
        console.log(this.props.id)    
        return (
            <li className="EachItem">
                <input type="checkbox"
                    checked={this.props.thing.status}
                    onChange={() => {
                        this.props.checkBox(this.props.id)
                    }} />
                <label>{this.props.thing.item}</label>
            </li>
        );
    }
}

export default EachItem;
