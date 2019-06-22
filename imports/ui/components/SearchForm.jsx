import React, {Component} from 'react'


export default class SearchForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      common_name: ""
    }
  }

  render() {
    return (
      <form className="search-form">
        <div>
          <label>Common Name:</label>
          <input type="text" name="common-name" value={this.state.common_name} onChange={this.handleCommonNameChange}/>
        </div>
        <input type="submit" onClick={this.handleSubmit}/>
      </form>
    )
  }

  handleCommonNameChange = (event) => {
    this.setState(
      {common_name: event.target.value}
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(
      {
        common_name: this.state.common_name
      }
    );
  }
}
