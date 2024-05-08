import React, { useState } from "react";
import InputForm from "./Components/InputForm";
import CalculationEngine from "./Components/CalculationEngine";
import ResultDisplay from "./Components/ResultDisplay";

const App = () =>{
  const [inputData, setInputData] = useState(null)
  const [results, setResults] = useState(null)

  const handleCalculate = (data) =>{
    setInputData(data)
  }
  const handleInputSubmit = (data )=>{
    setInputData(data)
  }
  const handleResultsCalculated = (calculatedResults)=>{
    setResults(calculatedResults);

  }
  return(
    <div>
      <h1>Calculadora de Volumen de Riego</h1>
      <InputForm onSubmit={handleCalculate}/>
      {
        inputData&& (<CalculationEngine
        inputData={inputData}
        onResultsCalculated={handleResultsCalculated}
        />
  
      )}
      {results && <ResultDisplay results={results}/>}
    </div>
  )
  

}


export default App