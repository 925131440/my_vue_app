import React from 'react'
import {exportFn} from '../component/exportFn'

export default class componentClass extends React.Component{
    // constructor(props){
    //     super(props)
        
    // }
    componentDidMount(){
        console.log('export,import练习',exportFn);

        
    //   arr = arr.replace(/aa/g,'');
    //   console.log(arr);
    }
    render(){
        return(
            <div>
                啦啦啦
            </div>
        )
    }
}
