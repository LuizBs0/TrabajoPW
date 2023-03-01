import NavBar from "../componentes/navbar"
import { useNavigate } from "react-router-dom"
import CartaRegistro from "../componentes/cartaRegistro"

export default function Registro(props) {

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
      }
    } else {
      console.log("Contraseñas no concuerdan")
    }
    
  }

  return (
    <div className="container-fluid bg-warning" style={{margin: "0", padding: "0"}}>
      <NavBar currentTabIndex={props.currentTabIndex} setCurrentTabIndex={props.setCurrentTabIndex}/>
      <CartaRegistro regConfirmation={ regConfirmation }/>
    </div>
  );
}
