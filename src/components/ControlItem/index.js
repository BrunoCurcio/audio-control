import React from "react";
import Proptypes from "prop-types";

class ControlItem extends React.Component {

    constructor(props) {
        super(props);
        this.state={value: this.props.value};
    }

    handlePlus = () => {
        this.setState({value: this.state.value + 1})
    }

    handleMinus = () => {
        this.setState({value: this.state.value - 1})
    }

    render() {
        return <>
        <li>
            <button onClick={this.handleMinus}>-</button>
            <span>{this.state.value} | {this.props.title}</span>
            <button onClick={this.handlePlus}>+</button>
        </li>        
        </>
    }
}

ControlItem.propTypes = {
    value: Proptypes.number,
    title: Proptypes.string,
}

export default ControlItem;