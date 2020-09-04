import React from "react";
import QuestionnaireContainer from "./components/QuestionnaireContainer";
import './tailwind.output.css';

function App() {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
        Button
        </button>
      <QuestionnaireContainer />
    </div>
  );
}

export default App;
