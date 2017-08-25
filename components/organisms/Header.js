import LogoBrand from '../atoms/LogoBrand'
import SearchBar from '../molecules/SearchBar'

const Header = props => (
  <header>
    <LogoBrand />
    <SearchBar />
    <style jsx>{`
      header {
        background-color: #fff059
      }
    `}</style>
  </header>
)

export default Header
