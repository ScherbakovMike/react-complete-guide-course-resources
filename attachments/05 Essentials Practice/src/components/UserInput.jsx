export default function UserInput({parameters, setParameters}) {
    return <section id={"user-input"}>
        <div className={"input-group"}>
            <div>
                <label>Initial investment</label>
                <input type={"number"} step="1" defaultValue={0} required
                       value={parameters.initialInvestment}
                       onChange={(e) => setParameters(
                           {
                               initialInvestment: parseInt(e.target.value),
                               annualInvestment: parameters.annualInvestment,
                               expectedReturn: parameters.expectedReturn,
                               duration: parameters.duration
                           }
                       )}/>
            </div>
            <div>
                <label>Annual investment</label>
                <input type={"number"} step="1" defaultValue={0} required
                       value={parameters.annualInvestment}
                       onChange={(e) => setParameters(
                           {
                               initialInvestment: parameters.initialInvestment,
                               annualInvestment: parseInt(e.target.value),
                               expectedReturn: parameters.expectedReturn,
                               duration: parameters.duration
                           }
                       )}/>
            </div>
        </div>
        <div className={"input-group"}>
            <div>
                <label>Expected return</label>
                <input type={"number"} step="1" defaultValue={0} required
                       value={parameters.expectedReturn}
                       onChange={(e) => setParameters(
                           {
                               initialInvestment: parameters.initialInvestment,
                               annualInvestment: parameters.annualInvestment,
                               expectedReturn: parseInt(e.target.value),
                               duration: parameters.duration
                           }
                       )}/>
            </div>
            <div>
                <label>Duration</label>
                <input type={"number"} step="1" defaultValue={0} required
                       value={parameters.duration}
                       onChange={(e) => setParameters(
                           {
                               initialInvestment: parameters.initialInvestment,
                               annualInvestment: parameters.annualInvestment,
                               expectedReturn: parameters.expectedReturn,
                               duration: parseInt(e.target.value)
                           }
                       )}/>
            </div>
        </div>
    </section>
}