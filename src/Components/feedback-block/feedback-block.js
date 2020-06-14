import React from 'react';
import './feedback-block.css';
import FeedbackItem from '../feedback-item';

const FeedbackBlock = ({datalist}) =>{


 

    const Comment = datalist.map( (item) =>{
        const{id,date,name, ...itemProps} = item;
        return (  <div key = {id} className ="full-list-item">
            <h3 className="comment-name">{name} <span className ="date">{date}</span></h3>
            <li  className ="comment-item">
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
