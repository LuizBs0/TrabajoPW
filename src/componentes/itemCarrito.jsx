export default function ItemCarrito(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.titulo}</td>
      <td>
        <img
          src={props.src}
          width="80px"
        />
      </td>
      <td>{props.cantidad}</td>
      <td>
        <button class="bg-danger btn m-1" type="button" onClick={()=>props.eliminarProd(props.plaId)}>
          <i class="bi-dash"> - </i>
        </button>
        <button class="bg-success btn " type="button" onClick={()=>props.aumentarProd(props.plaId)}>
          <i class="bi-plus">+</i>
        </button>
      </td>
      <td>S/. {props.total}</td>
    </tr>
  );
}
