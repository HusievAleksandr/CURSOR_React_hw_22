import React, { useState } from 'react';
import styles from './style/Post.module.css';


const Post =(props) => {

    
const  [business, setBusiness] =useState(0),
              [like, setLike] = useState(0),
        [desktop, setDesktop] = useState(0);


    return (
        <div className={styles['block']}>
            <div className={styles['page_title']}>
                <img src={props.author.photo} alt=""></img>
                <span>{props.author.name}</span>
                <span>{props.author.nickname}</span>
                <span>{props.date}</span>
            </div>

            <div className={styles['page_text']}>
                <span>{props.content}</span>
                <img src={props.image} alt='kontent-img'></img>
            </div>

            <div className={styles['page_sub-title']}>
                <span>
                    <img onClick={()=>business===0?setBusiness(1):setBusiness(0)}
                    className={styles['page_sub-title-img']} 
                    src={require("./images/business.gif")} alt="bussines"></img>
                    {business}
                </span>
                <span>
                    <img onClick={()=>like===0?setLike(1):setLike(0)}
                    className={styles['page_sub-title-img']} 
                    src={require("./images/like.png")} alt="bussines"></img>
                    {like}
                </span>
                <span>
                    <img onClick={()=>desktop===0?setDesktop(1):setDesktop(0)}
                    className={styles['page_sub-title-img']} 
                    src={require("./images/desktop.png")} alt="bussines"></img>
                    {desktop}
                </span>
            </div>
        </div>
        
    );
};



export default Post;