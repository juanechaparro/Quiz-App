import {  useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ResultsContext } from "./context/ResultsContext";
import {useFetch} from "./hooks/useFetch"
import { AppRouter } from "./routers/AppRouter";
function App() {
  
  
  const url =  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  const {data , loading} = useFetch(url);
  const [answers, setAnswers] = useState([]);
  return (
    <BrowserRouter>
    <ResultsContext.Provider value ={{
      data,loading,answers, setAnswers }}>
     <div className = "main" >
      <AppRouter/>
    </div>
  </ResultsContext.Provider>
  </BrowserRouter>
  
  );
}

export default App;
