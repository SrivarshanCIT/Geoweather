import React, { Component, Fragment } from "react";
import { Consumer } from "../../context";
/* import TodayForecast from './TodayForecast';
 */ import ThreeDayForecast from "./ThreeDayForecast";
import CurrentWeather from "./CurrentWeather";

class WeatherDashboard extends Component {
  state = { openSections: {} };

  componentDidMount() {
    this.setState({
      openSections: {
        currentForecast: true,
      },
    });
  }
  onClick = (e) => {
    this.setState({
      openSections: {
        [e.target.dataset.text]:
          !this.state.openSections[e.target.dataset.text],
      },
    });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { city, error } = value;
          const { currentForecast, todayForecast, fiveDayForecast } =
            this.state.openSections;

          return (
            <Fragment>
              {city ? (
                <Fragment>
                  <div className="d-flex flex-row align-items-stretch text-center">
                    <div
                      className="port-item bg-secondary text-white w-100 p-4"
                      data-text="currentForecast"
                      onClick={this.onClick}
                    >
                      <span data-text="currentForecast">Current Weather</span>
                    </div>

                    <div
                      className="port-item bg-info text-white w-100 p-4"
                      data-text="ThreeDayForecast"
                      onClick={this.onClick}
                    >
                      <span data-text="fiveDayForecast">3-Day Forecast</span>
                    </div>
                  </div>
                  <CurrentWeather isOpen={currentForecast} />

                  <ThreeDayForecast isOpen={ThreeDayForecast} />
                </Fragment>
              ) : (
                <div className="text-center">
                  <small className="text-danger text-center">{error}</small>
                </div>
              )}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default WeatherDashboard;
