import React from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { Button, Page, Input } from '../../components';
import SecondaryButton from '../Home/Components/Common/Button/SecondaryButton';

import * as Helpers from '../../helpers';
import refresh from '../../assets/images/refresh.png';
import arrowRightBlack from '../../assets/images/arrowRightBlack.png';

class Forgot extends React.Component {
  state = {
    confirmPassword: '',
    hideOrShow: 'Show',
    otp: '',
    otpSentDisplay: 'none',
    password: '',
    passwordType: 'password',
  }

  change = type => e => this.setState({ [type]: e.target.value });

  sendOtp = () => {
    const { mobile } = jwtDecode(Helpers.token.get('user:token'));
    const { otp } = this.props;
    otp(
      `+${mobile}`,
      () => {
        this.setState({ otpSentDisplay: 'block' });
      },
      () => {}
    );
  };

  forgot = () => {
    const { reset } = this.props;
    const {
      password, confirmPassword, otp,
    } = this.state;
    reset(
      {
        password,
        passwordConfirmation: confirmPassword,
      },
      otp,
      () => {
        Helpers.notification.success('Password reset successful!');
        this.setState({
          confirmPassword: '',
          otp: '',
          otpSentDisplay: 'none',
          password: '',
        });
      },
      () => {}
    );
  };

  setPasswordType = () => {
    const { hideOrShow, passwordType } = this.state;
    this.setState({ hideOrShow: hideOrShow === 'Hide' ? 'Show' : 'Hide', passwordType: passwordType === 'password' ? 'text' : 'password' });
  }

  back = trigger => () => {
    const { history } = this.props;
    history.push('/dashboard', {
      trigger,
    });
  }

  render() {
    const {
      password, confirmPassword, otp, otpSentDisplay, passwordType, hideOrShow,
    } = this.state;
    const {
      user: { loading },
    } = this.props;

    return (
      <Page
        title="Forgot Password"
        background={Math.random() > 0.5 ? 'woman' : 'man'}
        header={!Helpers.token.get('user:token') && (
          <>
            <div className="typography">Don&apos;t have an account?</div>
          &nbsp;&nbsp;&nbsp;
            <Link to="/signup"><Button size="small">Sign up</Button></Link>
          </>
        )}
        footer={<></>}
      >
        <div className="back" onClick={this.back()} style={{ marginLeft: '0px', marginTop: '20px' }}><img src={arrowRightBlack} alt="Back Button" style={{ height: '17px', width: '17px' }} /></div>
        <div className="center">
          <div className="heading">Forgot Password</div>
          <div className="subheading">Enter a new password and the OTP sent to your mobile number.</div>
        </div>
        <div className="center" style={{ marginTop: '10px', textAlign: 'center' }}>
          <SecondaryButton fill="126px" color="black" onClick={this.sendOtp} style={{ width: '130px' }}>
            <img
              className={`icon zls${loading.some(url => url === '/user/otp')
                ? ' loading' : ''}`}
              src={refresh}
              alt="Send OTP"
            />
            {otpSentDisplay === 'block' ? 'Resend OTP' : 'Send OTP'}
          </SecondaryButton>
          <p className="subheading" style={{ display: otpSentDisplay }}>OTP sent!</p>
        </div>
        <Input placeholder="OTP" type="text" onChange={this.change('otp')} value={otp} autocomplete="new-password" />
        <div className="password_input_show">
          <Input placeholder="New Password" type={passwordType} onChange={this.change('password')} value={password} autocomplete="new-password" />
          <p alt="Show password" className="password_show_icon" onClick={this.setPasswordType}>{hideOrShow}</p>
        </div>
        <div className="password_input_show forgot_last">
          <Input placeholder="Confirm Password" type={passwordType} onChange={this.change('confirmPassword')} value={confirmPassword} autocomplete="new-password" />
          <p alt="Show password" className="password_show_icon" onClick={this.setPasswordType}>{hideOrShow}</p>
        </div>
        <Button loading={loading.some(url => url === '/user')} size="large" onClick={this.forgot}>Submit</Button>
      </Page>
    );
  }
}

export default Forgot;
