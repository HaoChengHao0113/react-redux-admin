import React, { Component } from "react";
import { connect } from 'react-redux'
import store from '@/Store';
import { add, minus } from "../Actions";

class Yrz extends Component{
    constructor(props) {
        super(props);
    }

    add = (num) =>{
        const action = add(num);
        store.dispatch(action)
    }
    minus = (num) => {
        const action = minus(num);
        store.dispatch(action)
    }

    render() {
        const { value } = this.props;
        return (
            <div>
                <button onClick={()=>{
                    this.add(value)
                }}>点我+1</button>
                <button onClick={()=>{
                    this.minus(value)
                }}>点我-1</button>
                <div>{value}</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        value: state.value
    }
}
export default connect(mapStateToProps)(Yrz);