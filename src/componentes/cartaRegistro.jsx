import iconoLogin from "../imagenes/Icono Login.png"
import iconoGoogle from "../imagenes/Icono Google.png"
import { useState } from "react";

export default function CartaRegistro(props) {

  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [rpassword, setRPassword] = useState("")

  const buttonClick = () => {
    props.regConfirmation(usuario, password, rpassword)
  }

    return(
        <div
        id="container-login"
        className="vh-100 d-flex justify-content-center align-items-center"
      >
        <div
          className="bg-white p-5 rounded-5 text-secondary shadow"
          style={{width: "25rem"}}
        >
          <div className="d-flex justify-content-center">
            <img
              src={iconoLogin}
              alt="login-icon"
              style={{height: "10rem"}}
            />
          </div>

          <div className="text-center fs-1 fw-bold">Registrarse</div>

          <div className="input-group mt-4 mb-3">
            <div className="input-group-text bg-info">
              <i className="bi-person-fill fs-4"></i>
            </div>
            <input
              className="form-control bg-light"
              type="text"
              placeholder="Username"
              value={usuario}
              onChange={(evt) => setUsuario(evt.target.value)}
            />
          </div>

          <div className="input-group mt-1 mb-2">
            <div className="input-group-text bg-info">
              <i className="bi-lock-fill fs-4"></i>
            </div>
            <input
              className="form-control bg-light"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </div>

          <div className="input-group mt-1 mb-2">
            <div className="input-group-text bg-info">
              <i className="bi-lock-fill fs-4"></i>
            </div>
            <input
              className="form-control bg-light"
              type="password"
              placeholder="Repetir password"
              value={rpassword}
              onChange={(evt) => setRPassword(evt.target.value)}
            />
          </div>


            <button
              className="btn btn-info w-100 shadow-sm mt-3 mb-1 d-none d-md-inline-block w-100 text-white fw-bolder fs-4"
              type="button"
              onClick={ buttonClick }
            >
              Registrar
            </button>

          <div className="p-3">
            <div className="border-bottom text-center" style={{height: "0.9rem"}}>
              <span className="bg-white px-3">or</span>
            </div>
          </div>

          <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
            <img
              src={iconoGoogle}
              alt="google-icon"
              style={{height: "1.6rem"}}
            />
            <div className="fw-semibold text-secondary">Continuar con Google</div>
          </div>
        </div>
      </div>
    );
}