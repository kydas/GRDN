import React, {Component} from 'react';
import DataTableRow from './DataTableRow';
import {
  faSeedling, faFlask, faGlobeAsia, faHourglassHalf, faTemperatureLow,
  faTint, faTintSlash, faSnowflake, faEyeDropper, faUmbrellaBeach, faTh, faPoo 
} from '@fortawesome/free-solid-svg-icons';


export default class DataTable extends Component {

  render() {
    return (
      <table className="data-table">
        <tbody>
          <DataTableRow icon={faFlask} label="Scientific Name" value={this.props.entry.scientific_name}  />
          <DataTableRow icon={faGlobeAsia} label="Native Status" value={this.props.entry.native_status}  />
          {this.props.entry.main_species &&
            <DataTableRow icon={faHourglassHalf}  label="Duration" value={this.props.entry.main_species.duration} />
          }
          {this.props.entry.main_species && this.props.entry.main_species.fruit_or_seed &&
            <DataTableRow icon={faSeedling}  label="Seed Period" value={this.props.entry.main_species.fruit_or_seed.seed_period_begin + " – " +  this.props.entry.main_species.fruit_or_seed.seed_period_end} />
          }
          {this.props.entry.main_species && this.props.entry.main_species.growth &&
            <DataTableRow icon={faTemperatureLow}  label="Temperature Min" value={Math.trunc(this.props.entry.main_species.growth.temperature_minimum.deg_c) + "°C/" + this.props.entry.main_species.growth.temperature_minimum.deg_f + "°F"}  />
          }
          {this.props.entry.main_species && this.props.entry.main_species.growth &&
            <DataTableRow icon={faTint}  label="Precipitation" value={Math.trunc(this.props.entry.main_species.growth.precipitation_minimum.cm) + "cm – " + Math.trunc(this.props.entry.main_species.growth.precipitation_maximum.cm) + "cm"}  />
          }
          {this.props.entry.main_species && this.props.entry.main_species.growth &&
            <DataTableRow icon={faTintSlash}  label="Drought Tolerance" value={this.props.entry.main_species.growth.drought_tolerance}  />
          }
          {this.props.entry.main_species && this.props.entry.main_species.growth &&
            <DataTableRow icon={faSnowflake}  label="Frost Free Days" value={this.props.entry.main_species.growth.frost_free_days_minimum}  />
          }
          {this.props.entry.main_species && this.props.entry.main_species.growth &&
            <DataTableRow icon={faEyeDropper}  label="pH" value={this.props.entry.main_species.growth.ph_minimum + " – " + this.props.entry.main_species.growth.ph_maximum}  />
          }
          {this.props.entry.main_species && this.props.entry.main_species.growth &&
            <DataTableRow icon={faUmbrellaBeach}  label="Shade Tolerance" value={this.props.entry.main_species.growth.shade_tolerance}  />
          }
          {this.props.entry.main_species && this.props.entry.main_species.growth &&
            <DataTableRow icon={faTh}  label="Planting Density" value={this.props.entry.main_species.growth.planting_density_minimum.acre + " – " + this.props.entry.main_species.growth.planting_density_maximum.acre + " per acre"}  />
          }
          {this.props.entry.main_species && this.props.entry.main_species.growth &&
            <DataTableRow icon={faPoo}  label="Fertility Requirement" value={this.props.entry.main_species.growth.fertility_requirement}  />
          }

        </tbody>
      </table>
    );
  }
}
