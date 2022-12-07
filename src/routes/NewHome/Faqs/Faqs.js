import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import 'animate.css';

import './faq.css';

import {
  FaqsContainer, AboutSection, ListHeading, ListIcon, ListCaption, Info, ListContent, AboutList,
  AboutDropDown, MobileAboutHeader, ToggleIcon, Drop
} from './FaqsElement';

const topics = [
  {
    heading: 'About Carrot',
    qna: [
      { answer: 'Carrot is a digital lending platform that gives you access to credit in Dollars, at low interest rates.', question: 'What is Carrot?' },
      { answer: 'We currently do not provide customer support via phone or in person. However, you can reach us by sending an email to support@carrotcredit.com', question: 'Can I call a Carrot representative or visit the Carrot office?' },
      { answer: 'At the moment, Carrot loans are limited to a subset of users of select Carrot partners. In the future, we will be opening up to other customer segments. As soon as you are granted access to Carrot, it will be displayed on the app/website.', question: 'I don\'t have an account with a Carrot partner but I want to sign up?' },
    ],
  },
  {
    heading: 'Sign up',
    qna: [
      { answer: 'Simply log into your Carrot partner app and look out for the Carrot “special offer” banner. Click on the banner and follow the prompts to the sign-up page. Input your phone number and click on “sign-up”', question: 'How do I sign up?' },
      { answer: 'For security reasons, you will be unable to reset your Carrot password. However, you have the option to log in via the offer banner on your Carrot partner app.', question: 'How do I reset my password?' },
    ],
  },
  {
    heading: 'Eligibility Criteria',
    qna: [
      { answer: 'As soon as your loan application is confirmed as successful, you will receive feedback within 15 minutes.', question: 'How long does loan disbursement take?' },
      { answer: 'We do not require any documents to enable us to process a loan request. However, we expect you to fill all necessary fields during the loan application process.', question: 'Do I need to provide any documents to secure a loan?' },
      { answer: 'To be eligible for a loan today, you must have had the offer open to you. This implies that you must meet other conditions set by Carrot. However, our services will be available to other customer segments in the future.', question: 'How is my loan eligibility determined?' },
      { answer: 'The loan approved is determined by the value of your asset on your Carrot partner app. The exact amount you are eligible to borrow will be displayed on your Carrot dashboard.', question: 'How much am I eligible to borrow?' },
      { answer: 'If the full amount you were eligible for was disbursed, you won’t be able to secure another loan until your ongoing loan is repaid partially or fully. However, if you initially opted for the partial loan amount, then, you can request for up to the approved limit. See your dashboard for details of the amount available for you to borrow.', question: 'I am currently on a loan but I will like to request another loan' },
      { answer: 'During your loan application you can provide alternative account details by clicking on "I want to use another account", then you enter your account number, select your bank and enter your account name.', question: 'I want my loan disbursed to a different account' },
    ],
  },
  {
    heading: 'Loan Repayment',
    qna: [
      { answer: 'The interest rate is 3% per month.', question: 'What is the interest rate?' },
      { answer: "The minimum repayment expected per month is 6%. This comprises a 3% interest rate and 3% repayment of the principal. This repayment plan will occur monthly until the loan's principal is fully repaid.", question: 'What is the minimum monthly repayment?' },
      { answer: 'The restriction placed on your account is as a result of your ongoing loan. This restriction will be lifted gradually until repayment is completed.', question: 'Why is there a hold on the assets on my Carrot partner application account?' },
      { answer: 'When a loan is secured on Carrot, your Carrot partner app receives instructions to lock assets worth the loan amount (principal + 9% of the principal (3 months’ interest)) and an extra 20% of the principal. The additional 20% included, serves as a buffer to mitigate the risks that may arise from fluctuations in stock prices. However, the value of assets locked will reduce with each repayment made.', question: 'How does my Carrot partner app determine the value of assets held?' },
      { answer: 'During sign up, you will be required to fill in your card details for repayment and every month the card will be debited until repayment is completed. Alternatively, you can click on the "Add card" icon to include a card for monthly deductions. Also, if you would like to pay off your loan, you can simply click on the “Pay” button on the dashboard and input the total amount to be repaid.', question: 'How do I repay my loan?' },
      { answer: 'Early repayment increases your credit score and allows for quick loan approval. However, the amount you are eligible to receive will not increase based on early repayment.', question: 'Will the amount I am eligible to borrow increase if I repay early?' },
      { answer: 'Repayment dates are a month after a loan has been taken, and is displayed on the dashboard as “Next payment Date”. However, we accumulate all due loans and attempt a direct debit on the 1st of every month (starting November 1st 2021). 3 direct debit attempts would be made so ensure your account is sufficiently funded.', question: 'How can I determine my repayment date?' },
      { answer: 'To pay off your loan before your loan tenure elapses, click on the "Pay" button on the dashboard and insert the total loan amount displayed on your dashboard.', question: 'I want to repay all the money I owe at once?' },
      { answer: 'The breakdown of your loan repayment is available on your Carrot dashboard. Log in to access the information.', question: 'Where do I see a breakdown of my loan repayment?' },
      { answer: 'Repayment can be done either in Naira or Dollars. However, if you intend to repay in Naira, you will be charged the Dollar equivalent of the amount to be repaid. Note that, the exchange rate during repayment may vary depending on the rate provided by our financial partners.', question: 'Must loan repayment be done in Dollars?' },
      { answer: 'The bank transfer option is currently unavailable as a loan repayment option. Kindly add your card for monthly deductions.', question: 'Can I repay my loan using the bank transfer option?' },
      { answer: 'If your repayment is not displayed on the dashboard, we advise that you confirm if you were successfully debited. If the debit is successful but the repayment does not reflect on the dashboard, kindly send an email to support@carrotcredit.com and the issue will be resolved.', question: 'Why is my repayment not reflecting on the dashboard?' },
      { answer: 'A late repayment fee is required when the direct debit on your card fails thrice and you miss the 3 business days repayment timeline.', question: 'When do I have to pay a late repayment fee?' },
      { answer: '0.25% of the outstanding loan amount is charged as the late repayment fee.', question: 'How is the late repayment fee calculated?' },
    ],
  },
  {
    heading: 'Default on Loan Repayment',
    qna: [
      { answer: 'This means that a direct debit has failed. Kindly check the repayment account details provided and confirm if it is sufficiently funded. Alternatively, you can change the current card details supplied to a sufficiently funded account.', question: 'Why am I receiving notifications about repayment?' },
      { answer: 'If you are required to pay a late payment fee it means that the direct debit on your card failed and you missed the 2 days repayment window after the direct debit failed thrice. To repay, kindly fund your card or add a card that is sufficiently funded.', question: 'Why do I have to pay a late payment fee?' },
      { answer: 'If the loan is disbursed in Naira, 0.75% of the outstanding loan is charged. However, if the loan is disbursed in Dollars, 0.25% of the outstanding loan is charged as the late repayment fee', question: 'How is the late repayment fee calculated?' },
    ],
  },
  {
    heading: 'Liquidation',
    qna: [
      { answer: 'If after 3 month you have defaulted in repaying your loan your portfolio is automatically liquidated and your loan is paid off (Balance + late payment fee). A user\'s account can also be liquidated by your Carrot partner application if the value of the stocks in your portfolio declines past a certain amount.', question: 'Why was my account liquidated?' },
      { answer: 'After a user\'s account is liquidated, they will have to make a strong case for an account reopening with Carrot. The appeal would be subject to approval by the Carrot Management.', question: 'After Liquidation of my account what do I do?' },
      { answer: 'Liquidation of assets is final. We suggest that your funds are used to acquire new assets on your Carrot partner application.', question: 'I was late on my repayment and my account has already been liquidated, but I have my money now, what do I do?' },
    ],
  },
  {
    heading: 'Exchange Rate',
    qna: [
      { answer: 'The loan is disbursed in Dollars and Naira and repayment can be done with either currency. If a user repays in Naira, they will be charged the Dollar equivalent. The exchange rate used would be based on the rates provided by our financial partners.', question: 'What currency is used during lending and repayment?' },
      { answer: 'The exchange rate displayed is based on the current rates provided by our financial partners.', question: 'How does Carrot determine the exchange rate?' },
      { answer: 'To view the current exchange rate, log into the App and confirm via the dashboard. Note that, the rate is subject to change based on exchange rate fluctuations and rates received from our financial partners.', question: 'How do I confirm the exchange rate used during repayment?' },
    ],
  },
  {
    heading: 'Refunds',
    qna: [
      { answer: 'If you were debited multiple times during repayment your bank should reverse the overpaid value within 24 hours. However, if we receive repayment multiple times a refund will be initiated for the overpaid value. If a refund is not made within 24 hours, kindly send an email to support@carrotcredit.com', question: 'I triggered my repayment and was debited more than once' },
      { answer: 'The refunds timeline is 3 - 5 business days', question: 'What is your refunds timeline?' },
      { answer: 'Your refund will be processed in the currency debit occurred in.', question: 'Will my refund come in Naira or Dollars?' },
    ],
  },

];

const Faqs = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  const [visibleQuestion, setVisibleQuestion] = useState(0);

  const handleDropDown = () => {
    setShow(!show);
  };

  const chooseActiveTopic = i => () => {
    setActive(i);
    handleDropDown();
    setVisibleQuestion(0);
  };

  const chooseActiveQuestion = i => () => {
    setVisibleQuestion(visibleQuestion === i ? null : i);
  };

  useEffect(() => {
    document.body.classList.remove('no-overflow');
    document.body.classList.add('overflow');
  }, []);

  return (
    <div>
      <FaqsContainer>
        <AboutSection>
          <AboutList>
            <div>
              {topics.map((topic, i) => (
                <p key={i} onClick={chooseActiveTopic(i)} style={{ fontWeight: i === active ? 'bold' : 'normal' }}>{topic.heading}</p>
              ))}
            </div>
          </AboutList>
          <Drop>
            <AboutDropDown onClick={handleDropDown}>
              <MobileAboutHeader>{topics[active].heading}</MobileAboutHeader>
              <ToggleIcon>{show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</ToggleIcon>
            </AboutDropDown>
            {show && (
            <div className="animate__animated animate__fadeIn animate__delay-100s">
              {topics.map((topic, i) => (
                <p key={i} onClick={chooseActiveTopic(i)} style={{ fontWeight: i === active ? 'bold' : 'normal' }}>{topic.heading}</p>
              ))}
            </div>
            )}
          </Drop>
          <div>
            {topics[active].qna.map((qna, i) => (
              <Info key={i}>
                <ListContent onClick={chooseActiveQuestion(i)}>
                  <ListIcon>{visibleQuestion !== i ? '+' : '-'}</ListIcon>
                  <ListHeading>{qna.question}</ListHeading>
                </ListContent>
                <ListCaption className={visibleQuestion === i ? 'question-container-open' : 'question-container-close'}>{qna.answer}</ListCaption>
              </Info>
            ))}
          </div>
        </AboutSection>
      </FaqsContainer>
    </div>
  );
};

export default Faqs;
