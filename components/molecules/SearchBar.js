import Router from 'next/router'
import ButtonSearch from '../atoms/ButtonSearch'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    Router.push(`/items?search=${this.state.value}`)
  }

  render() {
    return (
      <section role="search">
        <form action="/items" method="GET" onSubmit={event => {this.handleSubmit(event)}}>
          <input id="search" type="text" name="search" value={this.state.value} onChange={(event) => { this.handleChange(event); }} />
          <ButtonSearch>
            <i className="fa fa-search" aria-hidden="true"></i>
          </ButtonSearch>
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
            transition: box-shadow 0.2s ease-in-out;
          }

          input:focus {
            box-shadow: 0 0 5px rgba(117, 127, 16, .2);
          }
        `}</style>
      </section>
    )
  }
}

export default SearchBar
