import Layout from '../components/templates/Layout'
import List from '../components/organisms/List'
import fetch from 'isomorphic-unfetch'

class Items extends React.Component {
  static async getInitialProps({ req, query }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const res = await fetch(`${baseUrl}/api/items?search=${query.search}`)
    const data = await res.json()
    const items = data.items.slice(0, 4)
    const categories = data.categories
    return { items, categories }
  }

  render() {
    return (
      <Layout>
        <List items={this.props.items} />
      </Layout>
    );
  }
}

export default Items
