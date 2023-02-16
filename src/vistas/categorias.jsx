import NavBar from "../componentes/navbar";
import cartaCategoria from "../componentes/cartaCategoria";
import CartaCategoria from "../componentes/cartaCategoria";
import { useEffect, useState } from "react";
import RES from "../imagenes/restaurante.jpg"
import { useNavigate } from "react-router-dom";

export default function Categorias(props) {
  const navigate = useNavigate()

  const [listaCategorias, setListaCategorias] = useState([])
  const [listaRestaurantes, setListaRestaurantes] = useState([])
  const [catRestaurante, setcatRestaurante] = useState("-1")

  const obtenerCategorias = async () => {
    try {
        const response = await fetch("http://localhost:8000/clientes/restaurantes/categorias")
        const data = await response.json()
        setListaCategorias(data.categorias)
    }catch(error) {
        console.error("Error obteniendo categorias")
    }
  }

  const obtenerRestaurantes = async (cat) => {
    try {
        const response = await fetch(`http://localhost:8000/clientes/restaurantes?cat=${cat}`)
        const data = await response.json()
        setListaRestaurantes(data.restaurantes)
        console.log(data.restaurantes)
    }catch(error) {
        console.error("Error obteniendo restaurantes")
    }
  }

  const navPlatos = (nombre, resId) => {
    navigate(`/TrabajoPW/platos/${nombre}/${resId}`)
  }

  useEffect(() => {
    obtenerCategorias()
    obtenerRestaurantes(catRestaurante)
}, [catRestaurante])

  return (
    <div className="container-fluid bg-warning" style={{ margin: "0", padding: "0" }}>
      <NavBar currentTabIndex={props.currentTabIndex} setCurrentTabIndex={props.setCurrentTabIndex}/>

      <section id="menu" className="bg-warning">
        <div className="container">
          <div className="row">
            <div className="col-12 intro-text text-center">
              <h1 className="fw-bolder p-2">Restaurantes por Categorías</h1>
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
              onClick={()=>setcatRestaurante("-1")}
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
                  onClick={()=>setcatRestaurante(cat.id)}
                >
                  {cat.nombre}
                </button>
              </li>
            })
          }
        </ul>

        
        <div className="row p-5">
          {
            listaRestaurantes.map((res)=> {
              return <div className="col-4 col-sm-4 g-5 px-5 text-center">
                <CartaCategoria
                    src={RES}
                    title={res.nombre}
                    description={res.descripcion}
                    horario={`Horario de atención: ${res.horario} hrs (Cerrado)`}
                    navPlatos={navPlatos}
                    id={res.id}
                />
              </div>
            })
          }
          
        </div>
      </section>
    </div>
  );
}
