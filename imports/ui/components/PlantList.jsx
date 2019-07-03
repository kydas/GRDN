import React, {Component} from 'react';

export default class PlantList extends Component {


  render() {
    if (!this.props.plants || this.props.plants.length <= 0) {
      return (
        <div>
          No plants found. Add some.
        </div>
      )
    }

    console.log(this.props.plants);

    return (
        <div>
          <ul>
            {this.props.plants.map((el) => {
            })}

            {this.props.plants.map((el) =>
                <li key={el._id}>{el.cachedData.common_name} x {el.qty}</li>

            )}
          </ul>
        </div>
      )
    }
}
