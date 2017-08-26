import Link from 'next/link'

const linkStyle = {
  outline: '1px solid red'
}

const ListItem = (props) => (
  <li>
    <article>
      <Link prefetch href={`/items/${props.data.id}`}>
        <a style={linkStyle}>{props.data.title}</a>
      </Link>
    </article>
  </li>
);

export default ListItem;
