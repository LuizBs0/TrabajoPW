import NavBar from "../componentes/navbar"
import CartaLogin from "../componentes/cartaLogin"

export default function Inicio(props) {
  return (
    <div className="container-fluid bg-warning" style={{margin: "0", padding: "0"}}>
      <NavBar currentTabIndex={props.currentTabIndex} setCurrentTabIndex={props.setCurrentTabIndex}/>
      <CartaLogin/>
    </div>
  );
}
