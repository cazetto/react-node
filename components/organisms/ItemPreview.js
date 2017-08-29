import Galery from '../molecules/Galery'
import ItemBuy from '../molecules/ItemBuy'

const ItemPreview = (props) => (
  <section className="row">

    <div className="col-md-7">
      <Galery pictures={props.item.pictures} />
    </div>

    <div className="col-md-5">
      <ItemBuy item={props.item} />
    </div>

    <style jsx>{`
      section {
        background-color: #fff;
        padding: 30px 30px 30px 20px;
      }
    `}</style>
  </section>
);

export default ItemPreview;
