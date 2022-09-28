
import React, { useState,memo,useCallback } from 'react';
export default function Index() {
  const [count, setcount] = useState(0);
 
  // const ShowTime = () => {
  //   console.log('now time :' + new Date());
  // };

  // 用callbak改进
  const ShowTime =useCallback(()=>{
    console.log('now time :' + new Date());
  },[]);
 
  return (
    <div>
      <h1>index：{count}</h1>
        <button type="primary" onClick={() => setcount(count + 1)}>
          increase
        </button>
        <ChildComponent fn={ShowTime} />
    </div>
  );
}
const ChildComponent =memo((props) => {
  console.log('child render!');
  return (
    <button type="primary" onClick={props.fn}>
      showTime
    </button>
  );
});