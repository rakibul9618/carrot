import styled from 'styled-components';
import { deviceQuery } from '../../Home/Assets/styles/font/themes';

export const FaqsContainer = styled.div`
    font-family: TT Norms;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: -0.02em;
`;

export const Heading = styled.h1`
    font-family: 'TT Norms Pro Bold';
    font-size: 1.8rem;
    line-height: 2rem;
    margin: 0;
    color: #121E0E;
    padding: 0 5% 13% 5%;
    @media ${deviceQuery.tablet} {
       font-size: 1.55rem;
       width: 75%;
       line-height: 2rem;
       padding: 0 5% 8% 5%;
       margin: auto;
       margin-bottom: 8px;
      }
`;
export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 11%;
    margin-top: -73px;
    @media ${deviceQuery.tablet} {
       display: block;
       img{
           display: none;
       }
       text-align: center;
       padding: 0;
     }
`;
export const Caption = styled.p`
    margin: 10px 0 0 0;
    @media ${deviceQuery.tablet} {
        line-height: 25.17px;
        width: 308px;
        margin: 0;
       margin: auto;
       }
`;
export const AboutSection = styled.div`
    display: flex;
    width: 90%;
    margin: 68px auto 60px 10%;
    justify-content: space-between;
    @media ${deviceQuery.tablet} {
        display: block;
    }
`;
export const ListHeading = styled.p`
    font-family: 'TT Norms Pro Medium';
    font-style: normal;
    font-size: 1.3rem;
    line-height: 1.5rem;
    color: #121E0E;

    cursor: pointer;
    width: 80%;
    margin: 27px 0;
    @media ${deviceQuery.tablet} {
        font-size: 1.1rem !important;
     } 

`;
export const ListIcon = styled.span`
    margin-right: 38px;
    color: #121E0E;
    font-size: 18px;
`;
export const ListCaption = styled.p`
    font-family: 'TT Norms Pro Regular';
    font-size: .85rem;
    font-style: normal;
    line-height: 1.5rem;
    margin-left: 48px;
    width: 92%;
    overflow: hidden;
    color: #121E0E
    @media ${deviceQuery.tablet} {
        font-size: 14px;
        width: auto;
        margin-top: -5px;
     } 
`;
export const ListContent = styled.div`
    display: flex;
    align-items: center;
    
 `;
export const Info = styled.div`
    border-bottom: 0px solid #121E0E;
    width: 80%;
    @media ${deviceQuery.tablet} {
        width: 85%;
     }
     &:last-child{
         border-bottom: none;
         margin-bottom: -24px;
     }
   
`;
export const AboutHeader = styled.p`
    font-size: 18px;
    font-weight: 600;
    @media ${deviceQuery.tablet} {
        display: none;
     } 
`;
export const MobileAboutHeader = styled.p`
     margin: 0 0 10px 0;
     width: 240px;
`;

export const AboutList = styled.div`
    & p {
      cursor: pointer;
      white-space: pre;
      margin-right: 50px;
    }
    @media ${deviceQuery.tablet} {
        display: none;
     } 
`;

export const AboutDropDown = styled.div`
     display: block;
     @media ${deviceQuery.tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 47px;
        border-bottom: 0.5px solid #121E0E;
        width: auto;
     } 
`;
export const Drop = styled.div`
    display: none;
    @media ${deviceQuery.tablet} {
        display: block;
     margin: auto;
     margin-top: -41px;
     p{
         cursor: pointer;
     }
    }
`;
export const ToggleIcon = styled.div`
     cursor: pointer;
`;

