import React, { useState, useCallback } from 'react';
import http from '../../http';
import axios from 'axios';


const Cross = () => {

    const sendHttp = () => {
        const url = '/api/wuhan/app/data/list-total?t=' + new Date().getTime();
        axios.get(url).then(res => {
            console.log(res, 'res');
        });
    }

    const text = '主分支'

    return (
        <div>
            <div>测试跨域</div>
            <div>{text}</div>
            <button onClick={() => sendHttp()}>发送请求</button><br />
            <button onClick={() => changeNum()}>{`数量：${count}`}</button>
        </div>
    )
}
export default Cross