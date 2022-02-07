import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResultsContext } from '../context/ResultsContext';

export const QuizScreen = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState(0);
  const {data,loading,setAnswers, answers} = useContext(ResultsContext);
  // const {category, question ,correct_answer} = data[number];
 const handleClick = (ans)=>{
   if(answers.length === 9){
    navigate("/results");
   }
   else{
   setAnswers([...answers, ans]);
   setNumber(number + 1);
  }

 }

  if(loading){
    return <p>Loading...</p>
  }
  else{
    return <div  >
 
  <h1>{data[number].category}</h1>
  <br></br>
  <br></br>
  <div className='quiz__card'>
  <p>{data[number].question} </p>
  <button onClick={(e)=>handleClick("True")} className=' btn '>True</button>
  <button onClick={(e)=>handleClick("False")} className=' btn '>False</button>
  </div>
  <br></br>
  <h4>{number + 1} of 10</h4>
  <br></br>

 


  </div>;
  }
  
};

