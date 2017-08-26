import Link from 'next/link'

const linkStyle = {
  outline: '1px solid red'
}

const ListItem = (props) => (
  <li>
    <article>
      <a href={`/items/${props.data.id}`} style={linkStyle}>{props.data.title}</a>
    </article>
  </li>
);

export default ListItem;
