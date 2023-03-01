import NavBar from "../componentes/navbar";
import CartaCategoria from "../componentes/cartaCategoria";
import { useEffect, useState } from "react";
import PLA from "../imagenes/plato.jpeg"
import { useParams } from "react-router-dom";
import CartaPlato from "../componentes/cartaPlato";



export default function Platos(props) {
  let prodsCarrito = JSON.parse(sessionStorage.getItem("PRODUCTOS_CARRITO") || "[]")
  const params = useParams()

  const [listaCategorias, setListaCategorias] = useState([])
  const [listaPlatos, setListaPlatos] = useState([])
  const [catPlato, setcatPlato] = useState("-1")

  const obtenerCategorias = async () => {
    try {
        const response = await fetch("https://djangoback.azurewebsites.net/clientes/platos/categorias")
        const data = await response.json()
        setListaCategorias(data.categorias)
    }catch(error) {
        console.error("Error obteniendo categorias")
    }
  }

  const obtenerPlatos = async (cat, res) => {
    try {
        const response = await fetch(`https://djangoback.azurewebsites.net/clientes/platos?res=${res}&cat=${cat}`)
        const data = await response.json()
        setListaPlatos(data.platos)
        console.log(data.platos)
    }catch(error) {
        console.error("Error obteniendo platos")
    }
  }

  const addCarrito = (id, nombre, precio) => {
    const dataPlato = {
      plaId : id,
      nombre : nombre,
      precio : precio,
      cantidad : 1
    }
    prodsCarrito.push(dataPlato)
    const dataCarritoJSON = JSON.stringify(prodsCarrito)
    sessionStorage.setItem("PRODUCTOS_CARRITO", dataCarritoJSON)
  }


  useEffect(() => {
    obtenerCategorias()
    obtenerPlatos(catPlato, params.resId)
}, [catPlato])

  return (
    <div className="container-fluid bg-warning" style={{ margin: "0", padding: "0" }}>
      <NavBar currentTabIndex={props.currentTabIndex} setCurrentTabIndex={props.setCurrentTabIndex}/>

      <section id="menu" className="bg-warning">
        <div className="container">
          <div className="row">
            <div className="col-12 intro-text text-center">
              <h1 className="fw-bolder p-2">{`Platos de ${params.nombre}`}</h1>
            </div>
          </div>
        </div>


        <ul
          className="nav nav-pills mb-4 justify-content-center navbar-dark bg-dark"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item fw-bold" role="presentation">
            <button
              className="nav-link active text-white"
              data-bs-toggle="pill"
              type="button"
              onClick={()=>setcatPlato("-1")}
            >
              Todo
            </button>
          </li>

          {
            listaCategorias.map((cat)=>{
              return <li className="nav-item fw-bold" role="presentation">
                <button
                  className="nav-link text-white"
                  data-bs-toggle="pill"
                  type="button"
                  onClick={()=>setcatPlato(cat.id)}
                >
                  {cat.nombre}
                </button>
              </li>
            })
          }
        </ul>

        
        <div className="row p-5">
          {
            listaPlatos.map((pla)=> {
              return <div className="col-4 col-sm-4 g-5 px-5 text-center">
                <CartaPlato
                    src={PLA}
                    title={pla.nombre}
                    description={pla.descripcion}
                    precio={pla.precio}
                    id={pla.id}
                    addCarrito={addCarrito}
                />
              </div>
            })
          }
          
        </div>
      </section>
    </div>
  );
}
