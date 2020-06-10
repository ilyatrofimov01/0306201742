import React, {Component} from 'react';
import './app.css';
import AppHeader from '../app-header';
import ServiceCounter from '../service-counter'
import LastFeedback from '../last-feedback'
import FeedbackBlock from '../feedback-block'

export default class  App extends Component{

    render (){
        return (
            <div className = "app d-flex">
                <AppHeader />
                <ServiceCounter />
                <LastFeedback />
                <FeedbackBlock />
            </div>
        )
    }
}