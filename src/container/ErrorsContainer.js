import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayView from '../components/DisplayView'

class ErrorsContainer extends Component {
  render(){
    return (
      <div className="container-error">
        <DisplayView error={this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps)(ErrorsContainer);
