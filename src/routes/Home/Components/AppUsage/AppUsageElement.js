import styled from 'styled-components';

export const Header = styled.h5`
    font-family: TT Norms;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: -0.02em;
    margin: 0;
    @media (max-width: 978px) {
        font-size: 22px;
        text-align: center;
    }
`;

export const Caption = styled.p`
    font-family: TT Norms;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.02em;
    width: 518px;
    @media (max-width: 978px){
        margin: auto;
        line-height: 23.65px;
        width: auto;
        padding: 0 24px;
        text-align: center;
        max-width: 534px;
    }
`;

export const List = styled.div`
    p{
        font-family: TT Norms;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 42px;
        letter-spacing: -0.02em;
        margin: 0 0 10px 10px;
        margin-left: 34px; 
    }
    @media (max-width: 978px) {
        p{
            margin-left: 10px;
            width: auto;
        }
    }
   
`;

export const ListItem = styled.p`   
    display: -webkit-box;
    -webkit-box-align: unset !important;
    align-items: center;
    span{
        font-size: 12px;
        font-style: normal;
        font-weight: 100;
        line-height: 31px;
        letter-spacing: -0.02em;
        color: lightgrey;
    }
    @media (max-width: 978px) {
        margin: auto;
        padding: 0 24px;
        width: auto;
    }
  
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 18px;
    margin-left: 150px;
   left: 30px;

    img{
        width: 100%;
    }
    @media (max-width: 978px) {
        display: none;
    }
`;
export const MobileContainer = styled.div`
    display: none;
    @media (max-width: 978px) {
        margin-top: 0;
        display: block;
        margin-left: 0px;
        margin: auto;
        img{
            margin: auto;
            width: 100%;
        }
    }
`;
