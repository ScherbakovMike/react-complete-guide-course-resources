import UserInput from "./UserInput.jsx";

export default function UserInputGroups() {
    return <div>
        <div className={"input-group"}>
            <UserInput />
            <UserInput />
        </div>
        <div className={"input-group"}>
            <UserInput />
            <UserInput />
        </div>
    </div>
}