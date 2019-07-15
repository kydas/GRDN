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
      <div className="search-form-container">
        <h4>Search GRDN</h4>
        <form className="search-form">
          <div className="row">
            <div className="col quarter">
              <label>Common Name:</label>
              <input type="text" name="common_name" value={this.state.common_name} onChange={this.handleChange}/>
            </div>
            <div className="col quarter">
              <label>pH Minimum:</label>
              <input type="text" name="ph_min" value={this.state.ph_min} onChange={this.handleChange}/>
            </div>
            <div className="col quarter">
              <label>Duration:</label>
              <select name="duration" value={this.state.duration} onChange={this.handleChange}>
                <option value=""> </option>
                <option value="Annual">Annual</option>
                <option value="Perennial">Perennial</option>
              </select>
            </div>
            <div className="col quarter">
              <label>Drought Tolerance:</label>
              <select name="drought_tol" value={this.state.drought_tol} onChange={this.handleChange}>
                <option value=""> </option>
                <option value="Low">Low</option>
                <option value="Medium"> Medium</option>
                <option value="High"> High</option>
              </select>
            </div>
          </div>
          <div className="action-buttons centered">
            <button onClick={this.handleSubmit} className="teal">Search</button>
            <button onClick={this.handleClear} className="purple">Clear</button>
          </div>
        </form>
      </div>
    )
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState(
      {[event.target.name]: event.target.value}
    );
  }

  handleClear = (event) => {
    event.preventDefault();
    this.setState({
      common_name: "",
      ph_min: "",
      duration: "",
      drought_tol: ""
    })
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
