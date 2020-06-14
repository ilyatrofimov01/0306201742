import React,{Component} from 'react';
import './comment-form.css'

export default class CommentForm extends Component{

    state ={
        name: 'Вася Васильев',
        date:'14 октября 2013',
        text: ''

    }

    addComment = (ev) =>{

        this.setState({text: ev.target.value})
    }
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onItemAdded(this.state.name,this.state.date,this.state.text);
        
    }


    render(){
    return (
        <div>
            <form className ="d-flex"
            onSubmit = {this.onSubmit}
            >
                <input className="form-control"
                onChange ={this.addComment}
                type = "text"/>
                
                <button
                        className="btn btn-success"
                        type ="submit"
                        >Написать консультанту
                </button>

            </form>
        </div>
    )
    }
}
