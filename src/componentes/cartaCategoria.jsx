export default function CartaCategoria(props) {
  return (
    <div class="col-lg-4 col-md-5 col-sm-6 col-12">
      <div class="card bg-dark">
        <img src={props.src} class="card-img-top" height="300" />
        <div class="card-body bg-dark text-white">
          <h5 class="card-title fw-bolder fs-3 text-white">{props.title}</h5>
          <p class="card-text text-white-50">{props.description}</p>
          <a href="./pantalla04.html" class="btn btn-outline-warning">
            Ver Platos
          </a>
        </div>
        <div class="card-footer text-white text-center bg-primary">
          {props.horario}
        </div>
      </div>
    </div>
  );
}
