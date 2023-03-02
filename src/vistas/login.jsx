import NavBar from "../componentes/navbar"
import { useNavigate } from "react-router-dom"
import CartaLogin from "../componentes/cartaLogin"
import { useState } from "react"
import { Alert } from "react-bootstrap"

export default function Login(props) {

  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const loginConfirmation = async (usuario, password) => {
    if (usuario !== "" && password !=="") {
      const response = await fetch(
        `https://djangoback.azurewebsites.net/clientes/login`,
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
        navigate("/TrabajoPW/inicio")
      } else {
        console.error(data.error)
        setShow(true)
      }
    }
    
  }

  return (
    <div className="container-fluid bg-warning" style={{margin: "0", padding: "0"}}>
      <NavBar currentTabIndex={props.currentTabIndex} setCurrentTabIndex={props.setCurrentTabIndex}/>
      
      <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Usuario o contraseña incorrecta</Alert.Heading>
      </Alert>
      
      <CartaLogin loginConfirmation={ loginConfirmation }/>
    </div>
  );
}
