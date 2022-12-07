import React from 'react';
import { MailContainer, Content } from './SubmitMailElement';
import Input from '../Common/Input/BaseInput';
import Button from '../Common/Button/PrimaryButton';

const SubmitMail = () => (
  <MailContainer>
    <Content>
      <h1>Get loans faster, and more efficiently</h1>
      <p>We are working hard on getting your most preferred financial institutions on our platform. Join our wait list to get more infromation, offers and goodwill.</p>
      <Input primary label="Enter Email" color="white" />
      <div>
        <Button fill="32%">Submit</Button>
      </div>
    </Content>
  </MailContainer>
);

export default SubmitMail;
