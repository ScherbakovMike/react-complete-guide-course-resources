
export default function Results({results, formatter}) {
    let totalInterest = 0;
    return <div id={"result"}>
        <table className={"center"}>
            <thead>
            <tr>
                <th scope="col">Year</th>
                <th scope="col">Investment Value</th>
                <th scope="col">Interest (Year)</th>
                <th scope="col">Total Interest</th>
                <th scope="col">Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {
                results.map(row => {
                    return <tr>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(totalInterest += row.interest)}</td>
                        <td>{formatter.format(row.valueEndOfYear - totalInterest)}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
}