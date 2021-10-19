import React, { Component } from 'react'
import {Form,Button,FormControl} from 'react-bootstrap'
import Note from './Note'
import {bake_cookie,delete_cookie,read_cookie} from 'sfcookies'
export default class App extends Component {
    constructor(){
        super();
        this.state = {
            text : '',
            note:[]
        }
    }
    componentDidMount(){
        this.setState({notes:read_cookie('NOTES')});
    }
    
    submit(){
            const {note,text} = this.state;
            const NewText  = {text};
            note.push(NewText);
            this.setState(note);
            bake_cookie('NOTES',note);
    }
    clearButton(){
        delete_cookie('NOTES');
        this.setState({note:[]});
    }
    render() {
        return (
            <div>
                <h2>Note to Safe</h2>
                <Form inline>
                    <FormControl onChange={e=>{this.setState({text:e.target.value})}} />
                    {'  '}
                    <Button className="submitBtn" onClick={e=>this.submit()}>Submit</Button>
                </Form>
                {
                   this.state.note.map((note,index)=>{
                      
                       return <Note key={index} note={note} />
                   })
                }
                <Button className="btn" onClick={e=>this.clearButton()}>Clear</Button>

            </div>
        )
    }
}
