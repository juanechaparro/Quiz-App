import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {
     const navigate = useNavigate()
     const handleClick = ()=>{
          navigate('/quiz');
     }
  return <div  >
      <h1>Welcome to the Trivia Challenge</h1>
      <br></br>
      <br></br>
      <p>You will be presented with 10 True or False questions. </p>
      <br></br>
      <br></br>
      <p >Can you score 100%? </p>

      <button className='btn' onClick={handleClick}> BEGIN</button>


      </div>
}
