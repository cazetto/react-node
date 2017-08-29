import ListItem from '../molecules/ListItem'

const List = (props) => {
  return (
    <ul>
      {props.items.map((item) => <ListItem key={item.id} data={item} />)}
      <style jsx>{`
        ul {
          padding-top: 1px;
          width: 100%;
        }
      `}</style>
    </ul>
  );
}

export default List;
