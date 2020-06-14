import React, {Component} from 'react';
import './feedback-item.js';

export default class FeedbackItem extends Component {
    
    render (){
        const {text} = this.props

        return (
            <div className ="li-text">
                <span>{text}</span>
            </div>
        )
    }
}