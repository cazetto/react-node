import Layout from '../components/templates/Layout'
import fetch from 'isomorphic-unfetch'

const Detail = props => (
  <Layout>
    {props.item && props.item.title}
    {props.description && console.log(props.description.title)}
  </Layout>
);

Detail.getInitialProps = async ({ query, req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const itemResponse = await fetch(`${baseUrl}/api/items/${query.id}`)
  const item = await itemResponse.json()
  const descriptionResponse = await fetch(`${baseUrl}/api/items/${query.id}/description`)
  const description = await descriptionResponse.json()
  return { item }
}

export default Detail
