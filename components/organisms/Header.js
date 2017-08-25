import Container from '../atoms/Container'
import LogoBrand from '../atoms/LogoBrand'
import SearchBar from '../molecules/SearchBar'

const Header = props => (
  <header>
    <Container>
      <LogoBrand />
      <SearchBar />
    </Container>
    <style jsx>{`
      header {
        background-color: #fff059;
        padding-top: 7px;
        padding-bottom: 6px;
        border-bottom: 1px solid #d9d9d9;
      }
    `}</style>
  </header>
)

export default Header
