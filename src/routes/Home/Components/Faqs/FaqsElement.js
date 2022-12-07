import styled from 'styled-components';
import { deviceQuery } from '../../Assets/styles/font/themes';

export const FaqsContainer = styled.div`
    font-family: TT Norms;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: -0.02em;
`;

export const Heading = styled.h1`
    font-size: 68px;
    line-height: 73px;
    margin: 0;
    @media ${deviceQuery.tablet} {
       font-size: 30px;
       width: 75%;
       line-height: 32.25px;
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
    font-size: 24px;
    font-weight: 400;
    line-height: 26px;
    cursor: pointer;
    width: 80%;
    margin: 27px 0;
    @media ${deviceQuery.tablet} {
        font-size: 16px !important;
     } 

`;
export const ListIcon = styled.span`
    margin-right: 38px;
    color: #8BA5A6;
    font-size: 18px;
`;
export const ListCaption = styled.p`
    font-size: 16px;
    margin-left: 48px;
    width: 92%;
    overflow: hidden;
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
    border-bottom: 0.5px solid #8BA5A6;
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
        border-bottom: 0.5px solid #8BA5A6;
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

