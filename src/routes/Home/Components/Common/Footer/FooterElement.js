import styled from 'styled-components';
import { deviceQuery } from '../../../Assets/styles/font/themes';

export const FooterContent = styled.div`
    width: 77%;
    margin: auto;
    font-family: TT Norms;
    @media ${deviceQuery.tablet} {
        width: 100%;
    }
`;
export const FooterSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 110px;
    align-items: center;
    p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        cursor: pointer;
    }
    @media ${deviceQuery.tablet} {
        display: block;
        text-align: center;
        margin-bottom: 42px;
        p{
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            cursor: pointer;
        }
    }
`;
export const FooterIcons = styled.img`
        margin-left: 30px;
        cursor: pointer;
`;

export const FooterLine = styled.div`
    border-bottom: 0.5px solid #353535;
    margin-bottom: 42px;
`;

export const OtherSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        margin: 0;
        font-size: 12px;
    }
    margin-bottom: 30px;
    @media ${deviceQuery.tablet} {
        display: none;
        text-align: center;
     }
`;

export const MobileOtherSection = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    p{
        margin: 0;
        
    }
    margin-bottom: 30px;
    @media ${deviceQuery.tablet} {
        display: block;
        text-align: center;
        p{
            margin-bottom: 10px;
            font-family: 'Poppins', sans-serif;
        }
     }
`;

export const CopyRight = styled.p`
@media ${deviceQuery.tablet} {
    margin-top: 20px;
 }
`;

export const FooterDocuments = styled.div`
    display: flex;
    p{
        margin: 0;
        margin-left: 50px;
        cursor: pointer;
        
    }
    @media ${deviceQuery.tablet} {
       display: block;
       p{
        margin-bottom: 9px;
        margin-left: 0px;
       }
      
    }
`;

