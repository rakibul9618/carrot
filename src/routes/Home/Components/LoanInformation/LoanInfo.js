import React from 'react';
import { ScrollTo } from 'react-scroll-to';
import { Slide } from 'react-slideshow-image';
import {
  LoanInfoHeader, Caption, InfoContainer, Header, Content, ServiceGroup, MobileServiceGroup, Group, ServiceContainer, Container
} from './LoanInfoElement';
import Speed from '../../Assets/Icons/speed.svg';
import Interface from '../../Assets/Icons/interface.svg';
import Flexible from '../../Assets/Icons/flexible.svg';
import Security from '../../Assets/Icons/security.svg';
import 'react-slideshow-image/dist/styles.css';

const Services = ({ image, title, caption }) => (
  <ServiceContainer>
    <Header>
      <img src={image} alt="services" />
    </Header>
    <Group>
      <h5>{title}</h5>
      <Content>{caption}</Content>
    </Group>
  </ServiceContainer>
);

const MobileServices = ({ image, title, caption }) => (
  <div>
    <Header>
      <img src={image} alt="services" />
      <h5>{title}</h5>
    </Header>
    <Content>{caption}</Content>
  </div>
);

const LoanInfo = () => (
  <>
    <InfoContainer>
      <LoanInfoHeader>Taking Loans have never been so easy</LoanInfoHeader>
      <Caption>Carrot helps users collect loans based on their Portfolio on a Carrot partner application. Our application process takes less time than making a cup of coffee. </Caption>
    </InfoContainer>
    <Container>
      <ServiceGroup>
        <Services image={Flexible} title="Flexible repayment options" caption="Carrot repayment was designed with simplicity in mind. We offer flexible terms and multiple repayment methods. Our customers also choose to repay in installments or at once." />
        <Services image={Speed} title="Speed" caption="The process of linking your external account to receiving funds on Carrot is less than 5 minutes. We know that this is important to our customers and we are committed to improving this wherever we can." />
      </ServiceGroup>
      <ServiceGroup>
        <Services image={Security} title="Security" caption="Making sure your funds and personal information are secure on Carrot is our top priority. We constantly iterate on our technology stack to keep up with industry trends in this regard." />
        <Services image={Interface} title="Interface" caption="Our easy to use, minimalistic designs were created to provide clarity for our customers. Ensuring customers have a seamless experience is our goal." />
      </ServiceGroup>
    </Container>
    <MobileServiceGroup>
      <Slide>
        <div>
          <MobileServices image={Flexible} title="Flexible repayment options" caption="Carrot repayment was designed with simplicity in mind. We offer flexible terms and multiple repayment methods. Our customers also choose to repay in installments or at once." />
          <ScrollTo>
            {({ scroll }) => (
              <div
                onClick={() => scroll({ smooth: true, x: 20, y: 705 })}
              />
            )}
          </ScrollTo>
        </div>
        <div>
          <MobileServices image={Speed} title="Speed" caption="The process of linking your external account to receiving funds on Carrot is less than 5 minutes. We know that this is important to our customers and we are committed to improving this wherever we can." />
          <ScrollTo>
            {({ scroll }) => (
              <div
                onClick={() => scroll({ smooth: true, x: 20, y: 705 })}
              />
            )}
          </ScrollTo>
        </div>
        <div>
          <MobileServices image={Security} title="Security" caption="Making sure your funds and personal information are secure on Carrot is our top priority. We constantly iterate on our technology stack to keep up with industry trends in this regard." />
          <ScrollTo>
            {({ scroll }) => (
              <div
                onClick={() => scroll({ smooth: true, x: 20, y: 705 })}
              />
            )}
          </ScrollTo>
        </div>
        <div>
          <MobileServices image={Interface} title="Interface" caption="Our easy to use, minimalistic designs were created to provide clarity for our customers. Ensuring customers have a seamless experience is our goal." />
          <ScrollTo>
            {({ scroll }) => (
              <div
                onClick={() => scroll({ smooth: true, x: 20, y: 705 })}
              />
            )}
          </ScrollTo>
        </div>
      </Slide>

    </MobileServiceGroup>
  </>
);

export default LoanInfo;
