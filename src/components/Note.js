import React, { Component } from 'react'

export default class Note extends Component {

    render() {
        return (
            <div>
                {this.props.note.text}
            </div>
        )
    }
}
