import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

import {calculateInvestmentResults, formatter} from "./util/investment.js";
import {useState} from "react";

const initialParameters = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
}

function App() {
    const [parameters, setParameters] = useState(initialParameters)
    return (<div>
            <Header/>
            <UserInput parameters={parameters} setParameters={setParameters}/>
            <Results results={calculateInvestmentResults(parameters)} formatter={formatter}/>
        </div>
    )
}

export default App
