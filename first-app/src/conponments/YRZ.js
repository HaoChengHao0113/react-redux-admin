import React, { Component } from "react";
import { connect } from 'react-redux'
import { add, minus } from "../Actions";

class Yrz extends Component{
    constructor(props) {
        super(props);
    }

    add = (num) =>{
        // const action = add(num);
        // this.props.dispatch(action)
        this.props.dispatch({
            type:'add',
            num: 1
        })
    }
    minus = (num) => {
        // const action = minus(num);
        // this.props.dispatch(action)
        this.props.dispatch({
            type:'minus',
            num: 1
        })
    }

    render() {
        const { value } = this.props;
        return (
            <div>
                <button onClick={()=>{
                    this.add()
                }}>点我+1</button>
                <button onClick={()=>{
                    this.minus()
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