import styled from 'styled-components';
import { deviceQuery } from '../../Assets/styles/font/themes';

export const LoanInfoHeader = styled.h5`
    font-family: TT Norms;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: -0.02em;
    margin: 0 0 15px 0;
    width: 318px;
    font-family: TT Norms;
    @media ${deviceQuery.tablet} {
        margin: 34px auto 12px auto;
        width: 250px;
        font-size: 22px;
        line-height: 23.65px;
    }
`;

export const Caption = styled.p`
    font-family: TT Norms;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.02em;
    max-width: 500px;
    margin: 0;
    margin-bottom: 25px;
    @media ${deviceQuery.tablet} {
        margin: auto;
        padding: 0px 25px;
    }
`;

export const InfoContainer = styled.div`
    margin-left: 173px;
    @media ${deviceQuery.tablet} {
        margin: unset;
        text-align: center;
        margin: auto;
    }
`;

export const Header = styled.div`
    display: flex;
    img{
        margin-right: -8px;
    }
    @media (max-width: 978px) {
        display: block;
        text-align: center;
        margin-top: 0px;
        margin-bottom: 6px;
        font-size 22px;
        font-weight: 400px !important;
        img{
            margin-bottom: 12px;
            margin-right: 0px;
        }
        h5{
            margin: 10px;
        }
    }
`;

export const Group = styled.div`
    width: 350px;
    margin-left: 25px;
    
    h5{
        margin: 0px;
        font-size: 24px;
        font-weight: 400;
        line-height: 25.8px;
    }
    @media (max-width: 978px) {
        h5{
            font-family: TT Norms;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: -0.02em;
            
        }
    }
`;

export const Content = styled.p`
    font-family: TT Norms;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: -0.02em;
    
    @media (max-width: 978px) {
        text-align: center;
        margin: auto;
        margin-bottom: 50px;
        padding: 0 24px;
        width: auto;
    }
`;
export const ServiceContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const Container = styled.div`
    margin: 83px 30px 70px 220px;
    @media (max-width: 978px) {
        margin: 36px 30px 70px 276px;
    }
`;

export const ServiceGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    @media (max-width: 978px) {
        display: none;
    }
`;

export const MobileServiceGroup = styled.div`
    display: none;
    @media (max-width: 978px){
        display: block;
        margin: auto;
        max-width: 534px;
    }
`;
