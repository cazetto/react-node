import Layout from '../components/templates/Layout'

const Index = props => (
  <Layout>
    <div className="content">
      <div className="col-sm-12">
        <p>Search for an item</p>
      </div>
    </div>

    <style jsx>{`
      .content {
        width: 100%;
        text-align: center;
        padding-top: 20px;
        font-size: .9em;
        color: #2d2d2d;
      }
    `}</style>
  </Layout>
);

export default Index
