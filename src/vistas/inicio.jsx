import NavBar from "../componentes/navbar"
import CartaLogin from "../componentes/cartaLogin"
import { useNavigate } from "react-router-dom"

export default function Inicio(props) {

  const navigate = useNavigate()

  const loginConfirmation = async (usuario, password) => {
    if (usuario !== "" && password !=="") {
      const response = await fetch(
        `http://localhost:8000/clientes/login`,
        {
            method : "POST",
            body : JSON.stringify(
                { 
                    usuario : usuario, 
                    password : password 
                }
            )
        }
      )
      const data = await response.json()
      if (data.error == ""){
        const dataUsuario = {
          userID : data.userid
        }

        const dataUsuarioJSON = JSON.stringify(dataUsuario)
        sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)
        console.log(`USUARIO LOGEADO: ${data.userid}`)
      } else {
        console.error(data.error)
      }
    }
    navigate("/categorias")
  }

  return (
    <div className="container-fluid bg-warning" style={{margin: "0", padding: "0"}}>
      <NavBar currentTabIndex={props.currentTabIndex} setCurrentTabIndex={props.setCurrentTabIndex}/>
      <CartaLogin loginConfirmation={ loginConfirmation }/>
    </div>
  );
}
