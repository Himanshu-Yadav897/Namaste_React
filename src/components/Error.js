import { useRouteError } from "react-router"
const Error = () =>{
    const err = useRouteError();
    // console.log(err);
    
    return (
        <>
        <h1>Oppps!!!!!!!</h1>
        <h2>Something went wrong</h2>
        <h2>{err.status} : {err.statusText}</h2>
        
        </>
    )
}

export default Error;