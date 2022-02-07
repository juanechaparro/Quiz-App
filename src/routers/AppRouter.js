import React from 'react';
import { Routes, Route } from "react-router-dom";   
import { HomeScreen } from '../home/HomeScreen';
import { QuizScreen } from '../quiz/QuizScreen';
import { ResultsScreen } from '../results/ResultsScreen';
export const AppRouter = () => {
  return <Routes>
     
     <Route path= "/quiz" element={<QuizScreen/>}></Route>
     <Route path= "/results" element={<ResultsScreen/>}> </Route>
     <Route path= "/" element={<HomeScreen/>}> </Route>
  </Routes>;
};

