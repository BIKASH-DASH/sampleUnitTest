import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

 class Stack extends Component {
     render() {
         const {title,cards} = this.props.stackData;

        return (
            <div>
                <Link to="/">Home</Link>
                <h1>{title}</h1>
                <br/>
                {
                    cards.map((card)=>{
                        return (
                            <div key={card.id}>{card.prompt}</div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {stackData:state}
}

export default connect(mapStateToProps)(Stack)