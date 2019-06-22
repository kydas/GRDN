import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class DataTableRow extends Component {

  render() {
    if (this.props.value == null) {
      return(null);
    }
    return (
      <tr>
        <td className="icon-td"><FontAwesomeIcon icon={this.props.icon} /></td>
        <td className="label-td">{this.props.label}</td>
        <td className="value-td">{this.props.value}</td>
      </tr>
    )
  }
}
