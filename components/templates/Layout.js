import Header from '../organisms/Header'

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
)

export default Layout
