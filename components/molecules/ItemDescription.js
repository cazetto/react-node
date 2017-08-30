const ItemDescription = (props) => (
  <section className="row">
    <div>
      {console.log('description', props.description)}

      <td dangerouslySetInnerHTML={{__html: props.description.text}} />
    </div>
    <style jsx>{`
      section {
        background-color: #fff;
        padding: 30px;
      }
    `}</style>
  </section>
);

export default ItemDescription;
