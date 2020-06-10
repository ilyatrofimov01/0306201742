import React from 'react';
import './feedback-block.css';
import FeedbackItem from '../feedback-item';

const FeedbackBlock = () =>{


    const datalist = [
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

    const Comment = datalist.map( (item) =>{
        const{id,date,name, ...itemProps} = item;
        return (  <div>
            <h3>{name} <span className ="date">{date}</span></h3>
            <li key = {id} className ="comment-item">
                <FeedbackItem {...itemProps} />
            </li>
            </div>
            )

    })

    return(
        <ul className ='comment-group'>
            {Comment}
        </ul>
    )
}
export default  FeedbackBlock;
