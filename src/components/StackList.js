import React, { Component } from 'react'
import Stacks from '../data/stacks.json'
import { Link } from 'react-router-dom'
import {setStack} from '../actions';
import {connect} from 'react-redux'
class StackList extends Component {
    render() {
        console.log('stack list props',this.props);
        return (
            <div>
                {
                    Stacks.map((stack,index)=>{
                        return(
                            <Link to='/stack/' 
                            onClick={(e)=>this.props.setStack(stack)} 
                            key={index} ><h4 >{stack.title}</h4></Link>
                        );
                    })
                }
            </div>
        )
    }
}



export default connect(null,{setStack})(StackList);