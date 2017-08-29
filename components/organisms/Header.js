import Container from '../atoms/Container'
import LogoBrand from '../atoms/LogoBrand'
import SearchBar from '../molecules/SearchBar'

const Header = props => (

    <header>
      <Container>
        <div className="wrapper">
          <LogoBrand />
          <SearchBar />
        </div>
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
        .wrapper {
          display: flex;
        }
        @media(max-width: 770px) {
          .wrapper {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </header>
)

export default Header
