export default function UserInput() {
    return <div id={"user-input"}>
        <div className={"input-group"}>
            <div>
                <label>Initial investment</label>
                <input type={"number"} step="1" defaultValue={0}/>
            </div>
            <div>
                <label>Annual investment</label>
                <input type={"number"} step="1" defaultValue={0}/>
            </div>
        </div>
        <div className={"input-group"}>
            <div>
                <label>Expected return</label>
                <input type={"number"} step="1" defaultValue={0}/>
            </div>
            <div>
                <label>Duration</label>
                <input type={"number"} step="1" defaultValue={0}/>
            </div>
        </div>
    </div>
}