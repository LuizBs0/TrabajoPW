import { useNavigate } from "react-router-dom";

export default function HomeNavbar(props) {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
      <div class="container-fluid">
        {/* <!--ICONO Y NOMBRE--> */}

        <a class="navbar-brand" href="#">
          <i class="bi-stopwatch-fill"></i>
          <span class="text-warning text-ju fs-2 fw-bolder">Fastaurant</span>
        </a>

        {/* <!--BOTON MENU--> */}

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <!--ELEMENTOS MENU COLAPSABLE--> */}

        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a
                class={props.currentTabIndex == 0? "nav-link fs-5 fw-bolder ms-3 active": "nav-link fs-5 fw-bolder ms-3"} 
                aria-current="page"
                onClick={() => {
                  navigate("/TrabajoPW/inicio");
                  props.setCurrentTabIndex(1);
                  }}
              >
                Inicio
              </a>
            </li>

            <li class="nav-item">
              <a
                class={props.currentTabIndex == 1? "nav-link fs-5 fw-bolder ms-3 active": "nav-link fs-5 fw-bolder ms-3"} 
                onClick={() => {
                  navigate("/TrabajoPW/categorias");
                  props.setCurrentTabIndex(1);
                }}
              >
                Categorías
              </a>
            </li>

            <li class="nav-item">
              <a
                class={props.currentTabIndex == 2? "nav-link fs-5 fw-bolder ms-3 active": "nav-link fs-5 fw-bolder ms-3"} 
                onClick={() => {
                    navigate("/TrabajoPW/carrito");
                    props.setCurrentTabIndex(2);
                  }}
              >
                Carrito
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link fs-5 fw-bolder ms-3" href="#">
                Seguimiento Pedido
              </a>
            </li>
          </ul>

          <li class="navbar-nav d-md-inline-block">
            <a class="nav-link fs-5 fw-bolder ms-3" href="#">
              Historial
            </a>
          </li>

          <hr class="d-md-none text-white-50" />

          {/* <!--INICIAR SESION--> */}

          <form class="d-flex ms-3" action="/TrabajoPW/login/">
            <button
              class="btn btn-outline-warning d-none d-md-inline-block"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
