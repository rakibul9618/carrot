import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Page, Input } from '../../components';
import bambooLogo from '../../assets/images/bamboo.svg';
import ssl from '../../assets/images/ssl.svg';

import * as Helpers from '../../helpers';

class Signup extends React.Component {
  state = {
    mobile: '',
  };

  secure = (
    <>
      <img src={ssl} alt="SSL" />
      {' '}
      By clicking &quot;Sign up with Bamboo&quot;, you acknowledge that you have read, understood, and agree to Carrot&apos;s
      {' '}
      <Link to="/Carrot Credit - Terms and Conditions.pdf" target="_blank" download>Terms and Conditions</Link>
      {' '}
      and
      {' '}
      <Link to="/Carrot Credit - Privacy Policy.pdf" target="_blank" download>Privacy Policy</Link>
      .
    </>
  );

  change = type => e => this.setState({ [type]: e.target.value });

  signup = () => {
    const { mobile } = this.state;
    const { signup, history } = this.props;
    if (mobile) {
      signup(undefined, mobile, history);
    } else {
      Helpers.notification.error('To continue fill in the form correctly.');
    }
  }

  render() {
    const { mobile } = this.state;
    const { user: { loading } } = this.props;
    return (
      <Page
        title="Signup"
        background="man"
        header={!Helpers.token.get('user:token') && (
          <>
            <div className="typography">Already have an account?</div>
            &nbsp;&nbsp;&nbsp;
            <Link to="/signin"><Button size="small" onClick={() => null}>Sign in</Button></Link>
          </>
        )}
        footer={this.secure}
      >
        <div className="center">
          <div className="heading">Sign up</div>
          <div className="subheading">Welcome to Carrot, to continue enter your mobile number.</div>
        </div>
        <Input placeholder="Enter your mobile (including country code)" type="text" onChange={this.change('mobile')} value={mobile} />
        <Button loading={loading.some(url => url === '/user')} size="large" onClick={this.signup}>
          <>
            Sign up with
            <div className="divider" />
            {' '}
            Bamboo
            <img className="button-logo" src={bambooLogo} alt="Bamboo Logo" />
          </>
        </Button>
      </Page>
    );
  }
}

export default Signup;
