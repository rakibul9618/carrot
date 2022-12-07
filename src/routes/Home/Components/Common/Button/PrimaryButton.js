import styled from 'styled-components';
import BaseButton from './BaseButton';

const PrimaryButton = styled(BaseButton).attrs(props => ({
  fill: props.fill || 'auto',
}))`
    background: white;
    border: none;
    cursor: pointer;
    padding: 18px 25px;
    width: ${props => props.fill};
    margin-top: 23px;
    color: #8BA5A6;
    font-family: TT Norms;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    border-radius: 4px;
`;
export default PrimaryButton;
