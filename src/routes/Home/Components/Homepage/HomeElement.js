import styled from 'styled-components';
import theme, { deviceQuery } from '../../Assets/styles/font/themes';

export const HeaderCaption = styled.p`
    font-family: TT Norms;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: -0.02em;
    max-width: ${props => props.size};
    @media ${deviceQuery.tablet} {
        margin: auto;
        margin-bottom: 11px;
    }
    
`;

export const Heading = styled.h2`
    font-family: TT Norms;
    font-size: 68px;
    font-style: normal;
    font-weight: 400;
    line-height: 73px;
    letter-spacing: -0.02em;
    max-width: 480px;
    margin: 0px;
    @media ${deviceQuery.tablet} {
        max-width: 550px;
        margin: auto;
        font-size: 30px;
        line-height: 32.25px;
        margin-bottom: 15px;
        margin-top: -55px;
    }
`;
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 77%;
    margin: auto;
    align-items: center;
    font-family: TT Norms;
    margin-top: -33px;
    @media ${deviceQuery.tablet} {
        display: block;
        text-align: center;
        margin: auto;
    }
`;
export const SmallCaption = styled.p`
    color: ${theme.colors.secondary};
    font-style: normal;
    font-weight: 800;
    font-size: 29px;
    font-family: 'Reenie Beanie', cursive;
    margin: 0px;
    

`;
export const Group = styled.div`
    display: flex;
    img{
        margin-left: 10px;
    }
    @media ${deviceQuery.tablet} {
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
    }
    
`;

export const HomeImage = styled.div`
    position: relative;
    margin: 70px 0px 70px 173px;
    img{
        width: 100%;
    }
    @media ${deviceQuery.tablet} {
        margin: unset;
        img{
            height: 264px;
        }
    }
`;
export const MobileButton = styled.div`
    display: none;
    @media ${deviceQuery.tablet} {
        display: block;
    }
`;
