import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayView from "../components/DisplayView";

class ErrorsContainer extends Component {
  render() {
    return (
      <div className="container-error">
        <DisplayView error={this.props.errors} />
      </div>
    );
  }
}

const mapState = ({errors}) => ({
  errors
});

export default connect(mapState)(ErrorsContainer);
