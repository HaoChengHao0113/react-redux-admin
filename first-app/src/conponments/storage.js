import React, { Component } from "react";
import Common from '@/layout/layout.js';

export default class Yrz extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let content = (<div>storage</div>);
        return (
            <div>
                <Common content={content}/>
            </div>
        )
    }
}