import {createStore} from 'redux';


export const nicknamePhoto ={
    Skywalker :"https://m.media-amazon.com/images/I/51SgxtdaowL._AC_SL1000_.jpg",
    Chewbacca :"https://lumiere-a.akamaihd.net/v1/images/chewbacca-solo_df104c08.jpeg?region=167,0,666,500",
    Yoda : "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2016/01/20/160120131256_star_wars_yoda_624x351_getty_nocredit.jpg",
    User: "https://images.unsplash.com/profile-fb-1548109616-927464543f88.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    };


 export const startPost =  {
    type:'ok',
    author: {
      name: "Skywalker",
      photo: "https://m.media-amazon.com/images/I/51SgxtdaowL._AC_SL1000_.jpg",
      nickname: "@dart_vader"},
    date: new Date().toLocaleDateString(),
    content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/star-wars-order.png",
      };


function reducer (state=[startPost], action){
        const arr = [...state];
        if(action.type ==='ok'){arr.push(action);
        return arr;
        }
        
        return state;
        };
 
 export const store = createStore (reducer);

 store.subscribe(()=>console.log(store.getState()))
