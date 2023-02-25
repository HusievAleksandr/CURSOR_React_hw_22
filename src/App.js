import './App.css';
import styles from './components/style/Heder.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './components/Post';
import { useDispatch, useSelector } from 'react-redux';
import {useRef} from 'react';
import {nicknamePhoto} from './helper/helper';





function App() {
  

  let data = useSelector(state=>state),
        dispatch     =     useDispatch();
  




  function onClick() {
                      dispatch({
                        type: 'ok',
                        author: {
                          name: selectAuthor.current.value,
                          photo: nicknamePhoto[selectAuthor.current.value],
                          nickname: "@edition"
                        },
                        date:new Date().toLocaleDateString(),
                        content: textContent.current.value,
                        image: inputUrl.current.value,
                      });
  }   

 const selectAuthor = useRef(),
            inputUrl =useRef(),
         textContent =useRef();


  return (
    <>
            <div className={styles['header']}>


                <label >Selecting the author from the drop-down list</label>
                <select ref={selectAuthor} className="form-control">
                    <option >Skywalker</option>
                    <option >Chewbacca</option>
                    <option >Yoda</option>
                    <option >User</option>
                </select>

                <label >Link to image</label>
                <input   ref={inputUrl} className="form-control" type="text" placeholder="URL"></input>

                <label >The text of the publications</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter here...</span>
                    </div>
                    <textarea ref={textContent} className="form-control" aria-label="With textarea"></textarea>
                </div>

                <button onClick={onClick} className={styles['header_button']}>Search</button>


            </div>
                        
               {data.map((el) => <Post {...el}/>)}            
        </>
  );
}

export default App;
