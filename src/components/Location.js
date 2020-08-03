import React from 'react';
import { connect } from 'react-redux';
import { changeLocation } from './actions';

class Location extends React.Component {
  renderList() {
    const btnClass =
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right';

    console.log(this.props.cities);
    return this.props.cities.map(city => {
      return (
        <div className="mx-auto grid grid-cols-2 gap-4 max-w-sm m-2" key={city}>
          <div className="col-span-1">
            <h4>{city}</h4>
          </div>
          <div className="col-span-1">
            <button
              className={btnClass}
              onClick={() => this.props.changeLocation(city)}
            >
              Show weather
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    cities: state.location,
  };
};

export default connect(mapStateToProps, {
  changeLocation: changeLocation,
})(Location);
