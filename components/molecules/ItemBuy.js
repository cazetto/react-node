import Price from '../atoms/Price'

const ItemBuy = (props) => (
  <section>
    <div>
      {console.log(props.item)}
      <h2>Lorem ipsum</h2>
      <h1>{props.item.title}</h1>
      <p className="price">
        <Price value={props.item.price} />
      </p>
    </div>
    <style jsx>{`
      section {
        background-color: #FFF;
      }
      h1 {
        font-size: 1.4em;
      }
      h2 {
        font-size: .9em;
        font-weight: 100;
        margin-bottom: 10px;
      }
      .price {
        font-size: 2em;
        font-weight: 400;
        margin-top: 10px;
      }
    `}</style>
  </section>
);

export default ItemBuy;
