import React from 'react';
import {
  Header, Caption, List, ListItem, Container, MobileContainer
} from './AppUsageElement';
import LoanImage from '../../Assets/Images/loan-image.svg';

const AppUsage = () => (
  <>
    <Container>
      <div>
        <Header>How to Use Carrot</Header>
        <Caption>Carrot is currently available for only users of select Carrot partner applications, we are working hard on getting your most preferred financial institutions on our platform. To collect loans.</Caption>
        <List>
          <ListItem>
            <span>01 -</span>
            <p>Open an account with a Carrot Partner</p>
          </ListItem>
          <ListItem>
            <span>02 -</span>
            <p>Go to the third party application tab on your account</p>
          </ListItem>
          <ListItem>
            <span>03 -</span>
            <p>Select Carrot</p>
          </ListItem>
          <ListItem>
            <span>04 -</span>
            <p>Click on Apply for Loans</p>
          </ListItem>
        </List>
      </div>
      <div>
        <img src={LoanImage} alt="loan" />
      </div>
    </Container>
    <MobileContainer>
      <div>
        <img src={LoanImage} alt="loan" />
      </div>
      <div>
        <Header>How to Use Carrot</Header>
        <Caption>Carrot is currently available for only users of select Carrot partner applications, we are working hard on getting your most preferred financial institutions on our platform. To collect loans.</Caption>
        <List>
          <ListItem>
            <span>01 -</span>
            <p>Open an account with a Carrot Partner</p>
          </ListItem>
          <ListItem>
            <span>02 -</span>
            <p>Go to the third party application tab on your account</p>
          </ListItem>
          <ListItem>
            <span>03 -</span>
            <p>Select Carrot</p>
          </ListItem>
          <ListItem>
            <span>04 -</span>
            <p>Click on Apply for Loans</p>
          </ListItem>
        </List>
      </div>
    </MobileContainer>
  </>
);

export default AppUsage;
