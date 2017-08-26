import ListItem from '../molecules/ListItem'

const List = (props) => {
  console.log(props.items);
  return (
    <ul>
      {props.items.map((item) => <ListItem key={item.id} data={item} />)}
    </ul>
  );
}

export default List;
