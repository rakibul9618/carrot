import styled from 'styled-components';
import theme from '../../Assets/styles/font/themes';

export const Container = styled.div`
    width: 520px;
    background: ${theme.colors.pink};
    padding: 83px 33px 90px 130px;
    @media (max-width: 978px) {
        width: unset;
        margin: auto;
        padding: 50px 33px 40px 33px;
    }
`;
export const TimeHeader = styled.h5`
    font-family: TT Norms;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: -0.02em;
    width: 312px;
    margin: 0;
    margin-bottom: 34px;
    @media (max-width: 978px) {
        width: 95%;
        margin: auto;
        text-align: center;
        margin-bottom: 20px;
        font-size: 22px;
        line-height: 23.65px
    }
    
`;

export const TimeCaption = styled.p`
    margin-bottom: 35px;
    width: 512px;
    font-family: TT Norms;
    line-height: 31.73px;
    @media (max-width: 978px) {
       text-align: center;
       margin: auto;
       margin-bottom: 35px;
       width: unset;
       max-width: 534px;
    }
`;
export const TimeContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 79%;
    align-items: center;
    img{
        height: 100%;
    }
    @media (max-width: 978px) {
        display: block;
        width: 100%;
        img{
            display: none;
        }
    }
`;
export const Arrow = styled.div`
    display: flex;
    img{
        margin-right: 35px;
        margin-bottom: 40px;
    }
`;
