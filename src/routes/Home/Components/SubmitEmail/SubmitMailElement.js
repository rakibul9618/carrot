import styled from 'styled-components';
import { deviceQuery } from '../../Assets/styles/font/themes';

export const MailContainer = styled.div`
    background: #8BA5A6;
    border-radius: 40px;
    width: 77%;
    padding: 55px 0;
    color: white;
    margin: auto;
    margin-bottom: 100px;
    h1{
        font-family: TT Norms;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: 41px;
        letter-spacing: -0.02em;
        text-align: center;
        margin: 16px;
    }
    p{
        width: 543px;
        max-width: 582px;
        text-align: center;
        margin: 19px auto;
        font-family: TT Norms;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;


    }
    @media ${deviceQuery.tablet} {
        width: 100%;
        border-radius: 0px;
        margin-bottom: 50px;
        h1{
            font-size: 22px;
            width: 250px;
            margin: auto;
            line-height: 23.65px;
        }
        p{
            padding: 0 20px;
            width: auto;
        }
    }
`;
export const Content = styled.div`
    text-align: center;
`;
