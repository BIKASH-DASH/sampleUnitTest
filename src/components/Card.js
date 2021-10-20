import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const {prompt,answer} =this.props.Card ;
        return (
            <div>
                <div><h4>{prompt}</h4></div>
                <div><h4>{answer}</h4></div>
            </div>
        )
    }
}
