const linkStyle = {
  outline: '1px solid red'
}

const ListItem = (props) => (
  <li>
    <article>
      <a style={linkStyle} href={`/items/${props.data.id}`}>{props.data.title}</a>
    </article>
  </li>
);

export default ListItem;
