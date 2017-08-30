import Layout from '../components/templates/Layout'
import ItemDetail from '../components/templates/ItemDetail'
import Breadcrumb from '../components/molecules/Breadcrumb'

import fetch from 'isomorphic-unfetch'

const Detail = props => (
  <div>
    <Layout>
      <Breadcrumb />
      <ItemDetail item={props.item} description={props.description} />
    </Layout>
    <style jsx>{`
    `}</style>
  </div>
);

Detail.getInitialProps = async ({ query, req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const itemResponse = await fetch(`${baseUrl}/api/items/${query.id}`)
  const item = await itemResponse.json()
  const descriptionResponse = await fetch(`${baseUrl}/api/items/${query.id}/description`)
  const description = await descriptionResponse.json()
  return { item, description }
}

export default Detail
