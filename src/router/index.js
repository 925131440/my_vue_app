import React from 'react';
import { useNavigate } from 'react-router-dom';
const Index = () => {

    const history = useNavigate();

    const toCross=()=>{
        history('/cross');
    }

    const toCallball =()=>{
        history('/callback');
    }
    return (
        <div>
            <div>主页</div>
            <button onClick={()=>toCross()}>to 跨域页</button>
            <button onClick={()=>toCallball()}>to callball</button>
        </div>
    )
}
export default Index