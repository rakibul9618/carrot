import React from 'react';
import { Link } from 'react-router-dom';
import { countries } from 'countries-list';

import { Page, Input } from '../../components';
import CustomButton from '../../components/Button';
import arrowDown from '../../assets/images/arrowDown.png';

import * as Helpers from '../../helpers';
import { is } from '@babel/types';

// mui
import styled from 'styled-components';
import Box from '@material-ui/core/Box';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Box)`
  padding: 0px 20px 0 0;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  &:hover {
  }
`;

class Signin extends React.Component {
  state = {
    countryCode: '234',
    email: '',
    realEmail: '',
    hideOrShow: 'Show',
    password: '',
    emailPassword: '',
    passwordType: 'password',
    isGmail: false,
  };

  change = (type) => (e) => this.setState({ [type]: e.target.value });

  withEmail = () => {
    this.setState({ isGmail: true });
  };
  withNumber = () => {
    this.setState({ isGmail: false });
  };

  setPasswordType = () => {
    const { hideOrShow, passwordType } = this.state;
    this.setState({
      hideOrShow: hideOrShow === 'Hide' ? 'Show' : 'Hide',
      passwordType: passwordType === 'password' ? 'text' : 'password',
    });
  };

  setCountryCode = () => {
    let cc = document.getElementById('country_code_select');
    cc = cc.options[cc.selectedIndex].value;
    this.setState({ countryCode: cc });
  };

  signin = () => {
    const { countryCode, email, password } = this.state;
    const emailTrim = email.trim();
    const finalEmail = `+${countryCode}${emailTrim}`;
    const { signin, history } = this.props;
    const mobileFormatCheck =
      emailTrim.length > 10 || emailTrim.indexOf('+') > -1;
    if (emailTrim && password && !mobileFormatCheck) {
      signin(finalEmail, password, history);
    } else {
      const signinError = mobileFormatCheck
        ? 'Incorrect mobile number format'
        : 'To continue fill in the form correctly.';
      Helpers.notification.error(signinError);
    }
  };

  forgot = () => {
    Helpers.notification.error(
      'For security reasons, you can only reset your password when signed in. Use a 3rd party application to signin.',
      'Not Allowed'
    );
  };

  render() {
    console.log(this.state.isGmail);
    const countriesKeys = Object.keys(countries);
    const {
      isGmail,
      realEmail,
      email,
      password,
      emailPassword,
      passwordType,
      hideOrShow,
    } = this.state;
    const {
      user: { loading },
    } = this.props;
    return (
      <Page
        title="Signin"
        background="man"
        header={
          !Helpers.token.get('user:token') && (
            <>
              <div className="typography">Don&apos;t have an account?</div>
              &nbsp;&nbsp;&nbsp;
              <Link to="/signup">
                <CustomButton size="small" onClick={() => null}>
                  Sign up
                </CustomButton>
              </Link>
            </>
          )
        }
        footer={
          <Link to="/signin" onClick={this.forgot}>
            Forgot Password?
          </Link>
        }
      >
        <div className="">
          <StyledBox component="div">
            <StyledButton
              onClick={this.withNumber}
              style={{
                padding: '0px 10px',
                borderBottom: isGmail ? '1px solid #adadaf' : '2px solid #000',
              }}
            >
              Sign in with Phone Number
            </StyledButton>
            <StyledButton
              onClick={this.withEmail}
              style={{
                padding: '0px 10px',
                borderBottom: isGmail ? '2px solid #000' : '1px solid #adadaf',
              }}
            >
              Sign in with Email Address
            </StyledButton>
          </StyledBox>

          <div className="subheading">
            Enter your {isGmail ? 'email' : 'mobile'} and password to continue.
          </div>
        </div>
        {isGmail ? (
          <>
            <div className="password_input_show">
              <Input
                placeholder="Email"
                type="email"
                onChange={this.change('realEmail')}
                value={realEmail}
              />
            </div>
            <div className="password_input_show">
              <Input
                placeholder="Password"
                type={passwordType}
                onChange={this.change('emailPassword')}
                value={emailPassword}
              />
              <p
                alt="Show password"
                className="password_show_icon"
                onClick={this.setPasswordType}
              >
                {hideOrShow}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="mobile_input">
              <img
                className="icon small country-code"
                src={arrowDown}
                alt="Arrow Down"
              />
              <select
                className="mobile_code_select"
                name="countryCode"
                id="country_code_select"
                onChange={this.setCountryCode}
              >
                <option value="234">NG (+234)</option>
                <option value="1">US (+1)</option>
                <option value="">+</option>
                {countriesKeys.map((country, i) => (
                  <option
                    key={i}
                    value={country.phone}
                  >{`${country} (+${countries[country].phone})`}</option>
                ))}
              </select>
              <Input
                placeholder="Mobile number"
                type="text"
                onChange={this.change('email')}
                value={email}
              />
            </div>
            <div className="password_input_show">
              <Input
                placeholder="Password"
                type={passwordType}
                onChange={this.change('password')}
                value={password}
              />
              <p
                alt="Show password"
                className="password_show_icon"
                onClick={this.setPasswordType}
              >
                {hideOrShow}
              </p>
            </div>
          </>
        )}
        <CustomButton
          loading={loading.some((url) => url === '/user/signin')}
          size="large"
          onClick={this.signin}
        >
          Sign in
        </CustomButton>
      </Page>
    );
  }
}

export default Signin;
