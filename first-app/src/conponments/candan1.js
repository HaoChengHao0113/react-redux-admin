import React, { Component } from "react";
import { connect } from 'react-redux';

class Candan1 extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { value } = this.props;
        return (
            <div>
                {value}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) =>{
    return {
        value: state.value
    }
}
export default connect(mapStateToProps)(Candan1)