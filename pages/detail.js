import Layout from '../components/templates/Layout'

const Detail = props => (
  <Layout>
    {props.item && props.item.title}
    {props.description && console.log(props.description.title)}
  </Layout>
);

Detail.getInitialProps = async ({ query:{ id } }) => {
  const itemResponse = await fetch(`https://api.mercadolibre.com/items/${id}`)
  const item = await itemResponse.json()
  const descriptionResponse = await fetch(`https://api.mercadolibre.com/items/${id}/description`)
  const description = await descriptionResponse.json()
  return { item, description }
}

export default Detail
