import React, { useImperativeHandle } from 'react';
export default ()=>{
    return (
        <div>
            <span>useImperativeHandle</span>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ul>
                <li>
                  <span>useImperativeHandle可以让你在使用ref时自定义暴露给父组件的实例值。在大多数情况下。应当避免使用ref这样的命令时代码，useImperativeHandle应当与forwardRef一起</span>
                </li>
                <li>useImperativeHandle(ref(传递来的),()=>{},[])</li>
            </ul>
        </div>
    )
}