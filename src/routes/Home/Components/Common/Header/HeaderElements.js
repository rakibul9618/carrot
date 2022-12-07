import styled from 'styled-components';
import theme, { deviceQuery } from '../../../Assets/styles/font/themes';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary}
    font-family: TT Norms;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    @media ${deviceQuery.tablet} {
       display: none;
    }

`;
export const HeaderLeft = styled.div`
 
`;
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    margin-right: 162px;
    margin-top: -70px;
    a{
        text-decoration: none;
        color: ${theme.colors.primary}
        
    }
    @media ${deviceQuery.tablet} {
        margin-right: 33px;
     }

`;
export const Logo = styled.img`
    position: relative;
    left: -83px;
    top: -136px;
`;
export const Icon = styled.img`
    cursor: pointer;
`;
export const Faqs = styled.p`
    margin-right: 40px;
    font-family: TT Norms;
    span{
        font-size: 12px;
    }
    @media ${deviceQuery.tablet} {
        font-size: 14px;
        color: white;
        text-align: center;
        margin-bottom: 43px;
        margin-right: unset;
    }
    
`;
export const MobileContainer = styled.div`
display: none;

@media ${deviceQuery.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary}
    font-family: TT Norms;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}  
`;

export const DropDown = styled.div`
@media ${deviceQuery.tablet} {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background: #353535;
    overflow-x: hidden;
    transition: height 50s;
    text-align: center;
}
`;
export const CloseButton = styled.p`
position: absolute;
top: 20px;
right: 45px;
font-size: 50px;
color: white;
margin: 0;
font-family: TT Norms;
${DropDown}{
    @media ${deviceQuery.tablet} {
        height: 5px;
    }
}
`;
export const DropDownLogo = styled.img`
@media ${deviceQuery.tablet} {
    z-index: 1;
    cursor: pointer;
}
`;
export const DropDownHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 34px 33px 81px 33px;
`;

export const DropImage = styled.div`
margin-top: 85px;

border-bottom: 1px solid white;
    img{
        margin-left: 30px;
        margin-bottom: 36px;
    }
`;
export const Footer = styled.div`
    margin-top: 26px;
    p{
        margin: 12px;
        font-family: TT Norms;
        cursor: pointer;
    }
`;

export const FooterSection = styled.div`
    color: white;
`;

