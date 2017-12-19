import React from 'react';
import { Redirect } from 'react-router-dom';
import EthAddress from './EthAddress';
import Funded from './Funded';
import ProfileNav from './ProfileNav';
import Received from './Received';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountFunded: 0,
      amountReceived: 0
    }
  }

  componentWillMount() {
    // Fetch amountFunded and amountReceived here and setState
  }

  render() {
    if (this.props.token !== null) {
      return (
        <React.Fragment>
          <ProfileNav email={this.props.email} logout={this.props.logout} />
          <Funded amountFunded={this.state.amountFunded} />
          <Received amountReceived={this.state.amountReceived} />
          <EthAddress />
        </React.Fragment>
      );
    } else {
      return (
        <Redirect to="/signup" /> 
      );
    }
  }
}

export default Profile;
