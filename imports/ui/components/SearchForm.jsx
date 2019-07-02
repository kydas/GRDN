import React, {Component} from 'react'


export default class SearchForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      common_name: "",
      ph_min: "",
      duration: "",
      drought_tol: ""
    }
  }

  render() {
    return (
      <form className="search-form">
        <div>
          <label>Common Name:</label>
          <input type="text" name="common_name" value={this.state.common_name} onChange={this.handleChange}/>
          <label>pH Minimum:</label>
          <input type="text" name="ph_min" value={this.state.ph_min} onChange={this.handleChange}/>
          <label>Duration:</label>
          <input type="text" name="duration" value={this.state.duration} onChange={this.handleChange}/>
          <label>Drought Tolerance:</label>
          <input type="text" name="drought_tol" value={this.state.drought_tol} onChange={this.handleChange}/>
        </div>
        <input type="submit" onClick={this.handleSubmit}/>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState(
      {[event.target.name]: event.target.value}
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(
      {
        common_name: this.state.common_name,
        ph_min: this.state.ph_min,
        duration: this.state.duration,
        drought_tol: this.state.drought_tol
      }
    );
  }
}
