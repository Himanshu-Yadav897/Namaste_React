import { useState } from "react";

const User = (props) =>{
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h1>count: {count}</h1>
            <h2>Name : {props.name}</h2>
            <h3>Software Developer</h3>
            <h4>Contact :- 9310614314</h4>
        </div>
    )
}

export default User;