import NavBar from "../componentes/navbar"
import { useNavigate } from "react-router-dom"
import CartaRegistro from "../componentes/cartaRegistro"
import { Alert } from "react-bootstrap"
import { useState } from "react"

export default function Registro(props) {

  const [showU, setShowU] = useState(false)
  const [showC, setShowC] = useState(false)
  const navigate = useNavigate()

  const regConfirmation = async (usuario, password, rpassword) => {
    if (usuario !== "" && (password !=="" && rpassword !=="") && (password == rpassword)) {
      const response = await fetch(
        `https://djangoback.azurewebsites.net/clientes/register`,
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
        console.log("USUARIO REGISTRADO")
        navigate("/TrabajoPW/login")
      } else {
        console.error(data.error)
        setShowU(true)
      }
    } else {
      console.log("Contraseñas no concuerdan")
      setShowC(true)
    }
    
  }

  return (
    <div className="container-fluid bg-warning" style={{margin: "0", padding: "0"}}>
      <NavBar currentTabIndex={props.currentTabIndex} setCurrentTabIndex={props.setCurrentTabIndex}/>
      
      <Alert show={showU} variant="danger" onClose={() => setShowU(false)} dismissible>
        <Alert.Heading>Usuario ya existe</Alert.Heading>
      </Alert>
      <Alert show={showC} variant="danger" onClose={() => setShowC(false)} dismissible>
        <Alert.Heading>Contraseñas no coinciden</Alert.Heading>
      </Alert>

      <CartaRegistro regConfirmation={ regConfirmation }/>
    </div>
  );
}
