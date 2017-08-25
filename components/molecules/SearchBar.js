import Button from '../atoms/Button'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
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
        <form onSubmit={() => {this.handleSubmit()}}>
          <input  id="search" type="text" name="search" value={this.state.value} onChange={() => { this.handleChange(); }} />
          <Button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </Button>
        </form>

        <style jsx>{`
          section {
            flex-grow: 1;
          }
          form {
            display: flex;
          }
          input {
            background-color: white;
            height: 40px;
            width: 100%;
            border: 1px solid #ccc;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            color: #333;
            padding: 14px;
            font-size: 16px;
            font-family: 'Arial';
            outline: 0;
          }
        `}</style>

      </section>
    )
  }
}

export default SearchBar
