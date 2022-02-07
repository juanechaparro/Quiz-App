import React, { useContext } from 'react';
import { ResultsContext } from '../context/ResultsContext';

export const ResultsScreen = () => {

  const {data, answers} = useContext(ResultsContext);
  let corrects = 0;
  if(data.length){
   for(let i =0 ; i<10 ; i++){
     let {correct_answer} = data[i]
     if(correct_answer === answers[i]) { 
       corrects ++ }
   }}
   
  return <div>
      <h1>You scored</h1>
      <span>{corrects} of 10</span>
      <br></br>
      {
        data.map((question, i)=>(
          question.correct_answer === answers[i] ? 
         ( <p key={question.question}><span className='results__size'>+ </span>{question.question} ✅<br /> </p> ):
          <p key={question.question}><span className='results__size'>- </span> {question.question} ⛔<br /></p> 
        ))
      }
        
      <br></br>

  
   <a className='results__play-again' href='/'>
   <button className='btn'>Play again ?</button>
   </a>
  </div>;
};

