import ItemDescription from '../molecules/ItemDescription'
import ItemPreview from '../organisms/ItemPreview'

const ItemDetail = (props) => (
  <section>
    <ItemPreview item={props.item} />
    <ItemDescription description={props.description} />
    <style jsx>{`
      section {
        width: 100%;
      }
    `}</style>
  </section>
)

export default ItemDetail
