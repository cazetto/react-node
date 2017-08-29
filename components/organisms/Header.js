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
          position: fixed;
          width: 100%;
          top: 0;
          height: 54px;
          background-color: #fff059;
          padding-top: 7px;
          padding-bottom: 6px;
          border-bottom: 1px solid #d9d9d9;
        }
      `}</style>
    </header>
)

export default Header
