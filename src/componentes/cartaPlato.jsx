export default function CartaPlato(props) {
  return (
    <div class="col-lg-4 col-md-5 col-sm-6 col-12 w-100" >
      <div class="card bg-dark">
        <img src={props.src} class="card-img-top" height="300" />
        <div class="card-body bg-dark text-white">
          <h5 class="card-title fw-bolder fs-3 text-white">{props.title}</h5>
          <p class="card-text text-white-50">{props.description}</p>
          <p class="card-text">Precio S/.{props.precio}</p>
          <a onClick={()=>{props.addCarrito(props.id, props.title, props.precio)}} class="btn btn-outline-warning">
            Añadir a carrito
          </a>
        </div>
      </div>
    </div>
  );
}
