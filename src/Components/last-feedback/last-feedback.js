import React from 'react'
import './last-feedback.css'

const LastFeedback = () =>{
    const likes = 131;
    const feedbacks = 14;
    return (
        <div className ="d-flex last-feedback">
            <div>
                <h2>Последние отзывы <a href ="http://localhost:3000/" >Все отзывы</a></h2>   
            </div>

            <div className='stat d-flex'>
            <div className ="likes-counter">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_di)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99441 10.7136C6.01753 10.735 6.02964 10.7461 6.02964 10.7461L6.02947 10.681C6.70429 10.0532 12.0107 5.05023 11.9888 2.98327C11.9652 0.775808 10.5617 -0.0226816 8.96488 0.000488394C7.45338 0.0231885 6.1314 1.32853 5.99439 1.46801C5.85737 1.32853 4.53537 0.0231885 3.02404 0.000488394C1.42727 -0.0226816 0.0235557 0.775808 6.77177e-05 2.98327C-0.0218521 5.05023 5.28453 10.0532 5.95935 10.681L5.95919 10.7461C5.95919 10.7461 5.97129 10.735 5.99441 10.7136Z" fill="#333333"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99441 10.7136C6.01753 10.735 6.02964 10.7461 6.02964 10.7461L6.02947 10.681C6.70429 10.0532 12.0107 5.05023 11.9888 2.98327C11.9652 0.775808 10.5617 -0.0226816 8.96488 0.000488394C7.45338 0.0231885 6.1314 1.32853 5.99439 1.46801C5.85737 1.32853 4.53537 0.0231885 3.02404 0.000488394C1.42727 -0.0226816 0.0235557 0.775808 6.77177e-05 2.98327C-0.0218521 5.05023 5.28453 10.0532 5.95935 10.681L5.95919 10.7461C5.95919 10.7461 5.97129 10.735 5.99441 10.7136Z" fill="#73B4D5"/>
                </g>
                <defs>
                <filter id="filter0_di" x="0" y="0" width="11.9888" height="11.7461" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-1"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                </defs>
            </svg> {likes} </div> 
            
            <div>
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_di)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 -0.00106812H1C0.447728 -0.00106812 0 0.446852 0 0.998964V7.999C0 8.55132 0.447728 8.99892 1 8.99892H6.24995L9.99997 12.7489V8.99892H12C12.5523 8.99892 13 8.55132 13 7.999V0.998964C13 0.446852 12.5523 -0.00106812 12 -0.00106812Z" fill="#B3B3B3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 -0.00106812H1C0.447728 -0.00106812 0 0.446852 0 0.998964V7.999C0 8.55132 0.447728 8.99892 1 8.99892H6.24995L9.99997 12.7489V8.99892H12C12.5523 8.99892 13 8.55132 13 7.999V0.998964C13 0.446852 12.5523 -0.00106812 12 -0.00106812Z" fill="#73B4D5"/>
                </g>
                <defs>
                <filter id="filter0_di" x="0" y="-0.00106812" width="13" height="13.7499" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-1"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                </defs>
            </svg> {feedbacks}</div>
            </div>
        </div>
        
    )
}
export default LastFeedback;

