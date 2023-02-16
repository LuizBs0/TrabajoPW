import NavBar from "../componentes/navbar";
import ItemCarrito from "../componentes/itemCarrito";
import { useEffect, useState } from "react";
import PLA from "../imagenes/plato.jpeg"


export default function Carrito(props) {
  const [prods,setProds] = useState([])
  const [precioTotal, setPrecioTotal] = useState(0)
  const [cantTotal, setCantTotal] = useState(0)

  let prodsCarritoFil = []
  let filtro = []

  let x = 0
  

  const limpiarProds = () => {
    let prodsCarrito = JSON.parse(sessionStorage.getItem("PRODUCTOS_CARRITO") || "[]")
    let x = 1

    for (x=0;x<prodsCarrito.length;x++) {
      filtro.push(1)
    }

    for (let i=0;i<prodsCarrito.length;i++) {

      if (filtro[i]==1) {
        for (let j=i+1;j<prodsCarrito.length;j++){

          if(prodsCarrito[i].plaId == prodsCarrito[j].plaId) {
            filtro[j] = 0
            prodsCarrito[i].cantidad = prodsCarrito[i].cantidad + 1
            prodsCarrito[i].precio = prodsCarrito[i].precio + prodsCarrito[j].precio
          }
        }
      }  
    }

    for (let i = 0; i < prodsCarrito.length; i++) {
      if (filtro[i]==1) {
        prodsCarritoFil.push(prodsCarrito[i])
      }
    }

    setProds(prodsCarritoFil)
    
    sumarCantidad()
    sumarPrecio()

    // setPrecioTotal(sumarPrecio())
    // setCantTotal(sumarCantidad())

  }

  const sumarPrecio = () => {
    let suma = 0
    prodsCarritoFil.map((prod) => {
      suma = suma + prod.precio
    })
    setPrecioTotal(suma)
  }

  const sumarCantidad = () => {
    let suma = 0
    prodsCarritoFil.map((prod) => {
      suma = suma + prod.cantidad
    })
    setCantTotal(suma)
  }

  const vaciarCarrito = () => {
    setProds([])
    sessionStorage.setItem("PRODUCTOS_CARRITO", [])
  }

  const eliminarProd = (id) => {
    let nuevaListaProds = []
    console.log("eliminar")
    // for (let i=0;prods.length;i++){
    //   if(prods[i].plaId == id) {
    //     if(prods[i].cantidad !== 1) {
    //       let preciouni = prods[i].precio / prods[i].cantidad
    //       prods[i].cantidad = prods[i].cantidad - 1
    //       prods[i].precio = prods[i].precio - preciouni
    //     } else {
    //       prods.splice(i, i)
    //     }
    //   }
    //   nuevaListaProds.push(prods[i])
    // }

    prods.map((prod, index) => {
      if(prod.plaId == id) {
        if (prod.cantidad !== 1) {
          let preciouni = prod.precio / prod.cantidad
          prod.cantidad = prod.cantidad - 1
          prod.precio = prod.precio - preciouni
        } else {
          prods.splice(index, index)
        }
      }
      nuevaListaProds.push(prod)
    })
    setProds(nuevaListaProds)
    sessionStorage.setItem("PRODUCTOS_CARRITO", JSON.stringify(prods))
  }

  const aumentarProd = (id) => {
    let nuevaListaProds = []
    prods.map((prod) => {
      if(prod.plaId == id) {
        let preciouni = prod.precio / prod.cantidad
        prod.cantidad = prod.cantidad + 1
        prod.precio = prod.precio + preciouni
      }
      nuevaListaProds.push(prod)
    })
    setProds(nuevaListaProds)
    sessionStorage.setItem("PRODUCTOS_CARRITO", JSON.stringify(prods))
  }

  useEffect(() => {
    limpiarProds();
  }, [])

  return (
    <div
      className="container-fluid bg-warning"
      style={{ margin: "0", padding: "0", minHeight: "100vh" }}
    >
      <NavBar currentTabIndex={props.currentTabIndex} setCurrentTabIndex={props.setCurrentTabIndex} />
      {/* <!--TITULO--> */}

      <div className="container">
        <div className="row">
          <div className="col-12 intro-text text-center">
            <h1 className="fw-bolder p-2">Carrito de Compras</h1>
          </div>
        </div>
      </div>

      {/* <!--TABLA PRODUCTOS EN CARRITO--> */}

      <table className="table table-dark table-lg-5 text-center align-middle fs-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Referencia</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Accion</th>
            <th scope="col">Total</th>
          </tr>
        </thead>

        <tbody>
          {
            prods.map((prod)=>{
              x++
              return <ItemCarrito
              id={x}
              plaId={prod.plaId}
              src={PLA}
              titulo={prod.nombre}
              cantidad={prod.cantidad}
              total={prod.precio}
              eliminarProd={eliminarProd}
              aumentarProd={aumentarProd}
              />
            })
          }
        </tbody>

        <tfoot className="fw-bold">
          <tr>
            <th className="text-center">TOTAL PRODUCTOS</th>
            <th></th>
            <th></th>
            <th>{cantTotal}</th>
            <th>
              <button className="bg-danger btn" type="button" onClick={ vaciarCarrito }>
                Vaciar Todo
              </button>
            </th>
            <td>S/ {precioTotal}</td>
          </tr>
        </tfoot>
      </table>
      <div className="d-flex justify-content-end">
        <button
          className="bg-success fs-1 btn m-2"
          type="button"
        >
          Realizar Pedido
        </button>
      </div>
    </div>
  );
}
