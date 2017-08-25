import Button from '../atoms/Button'

const handleSearchSubmit = () => {
  console.log('handleSearchSubmit')
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <section role="search">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input  id="search" type="text" name="search" placeholder="Search.." value={this.state.value} onChange={this.handleChange} />
          </label>
          <Button />
        </form>
      </section>
    )
  }
}

export default SearchBar
