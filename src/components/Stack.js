import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Card from './Card'
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
                            <Card key={card.id} Card={card} />
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