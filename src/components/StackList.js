import React, { Component } from 'react'
import Stacks from '../data/stacks.json'
import { Link } from 'react-router-dom'

export default class StackList extends Component {
    render() {
        return (
            <div>
                {
                    Stacks.map((stack,index)=>{
                        return(
                            <Link to='/stack/' key={index} ><h4 >{stack.title}</h4></Link>
                        );
                    })
                }
            </div>
        )
    }
}
