import {useRouteError, useNavigate} from "react-router-dom"
import "../App.css"

export default function ErrorPage(){
    const error = useRouteError();
    const navigate = useNavigate();

    const handleClick =()=>{
        navigate(-1);
    }

    return <>
     <div id="error-page">
      <h1>Oops!</h1>
      <p>Ocurrio un error inesperado.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
      <div className="button">
        <button onClick={handleClick}>Volver</button>
      </div>
    </div>
    </>
}