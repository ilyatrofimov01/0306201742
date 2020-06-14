import React, {Component} from 'react';
import './app.css';
import AppHeader from '../app-header';
import ServiceCounter from '../service-counter'
import LastFeedback from '../last-feedback'
import FeedbackBlock from '../feedback-block'
import  CommentForm from '../comment-form';

export default class  App extends Component{

    maxId = 4;

    state = {
        datalist: [
            {id:1,
                text:'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ',
                name: 'Самуил',
                date: "13 октября 2011",
            },
            {id:2,
            text:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
            name: 'Лилия Семеновна',
            date: "14 октября 2013",
            },
            {id:3,
                text:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
                name: 'Лилия Семеновна',
                date: "14 октября 2013",
            }
        ]
    }

    addItem = (name,date,text) =>{
        const newItem ={
            name,
            date,
            text,  
            id: this.maxId++ 
        }
        this.setState(({datalist})=>{
            const newArray = [...datalist,newItem];
            return{
                    datalist : newArray
              };

         });
        console.log(newItem)

    }
    render (){
        return (
            <div className = "app d-flex">
                <AppHeader />
                <ServiceCounter />
                <LastFeedback />
                <FeedbackBlock datalist = {this.state.datalist}/> 
                <CommentForm onItemAdded ={this.addItem}/>
            </div>
        )
    }
}