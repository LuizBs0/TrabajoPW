import NavBar from "../componentes/navbar";
import ItemCarrito from "../componentes/itemCarrito";

export default function Carrito(props) {
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
          <ItemCarrito
            id="1"
            src="https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg"
            titulo="Hamburguesa"
            cantidad="2"
            total="S/ 20"
          />
          <ItemCarrito
            id="2"
            src="https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg"
            titulo="Pizza"
            cantidad="1"
            total="S/ 40"
          />
          <ItemCarrito
            id="3"
            src="https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg"
            titulo="Helado"
            cantidad="1"
            total="S/ 8"
          />

          <ItemCarrito
            id="1"
            src="https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg"
            titulo="Hamburguesa"
            cantidad="2"
            total="S/ 20"
          />
          <ItemCarrito
            id="2"
            src="https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg"
            titulo="Pizza"
            cantidad="1"
            total="S/ 40"
          />
        </tbody>

        <tfoot className="fw-bold">
          <tr>
            <th className="text-center">TOTAL PRODUCTOS</th>
            <th></th>
            <th></th>
            <th>5</th>
            <th>
              <button className="bg-danger" type="button">
                Vaciar Todo
              </button>
            </th>
            <td>S/ 128</td>
          </tr>
        </tfoot>
      </table>
      <div className="d-flex justify-content-end">
        <button
          className="bg-success fs-1"
          type="button"
        >
          Realizar Pedido
        </button>
      </div>
    </div>
  );
}
