import Layout from '../components/templates/Layout'
import List from '../components/organisms/List'
import fetch from 'isomorphic-unfetch'

class Items extends React.Component {
  static async getInitialProps({ query }) {
    const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query.search}`);
    const data = await res.json()
    const items = data.results.slice(0, 4)
    return {
      items
    }
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
