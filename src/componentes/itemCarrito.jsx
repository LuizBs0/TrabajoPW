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
        <button class="bg-danger " type="button">
          <i class="bi-dash">+</i>
        </button>
        <button class="bg-success " type="button">
          <i class="bi-plus">-</i>
        </button>
      </td>
      <td>{props.total}</td>
    </tr>
  );
}
