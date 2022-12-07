import styled from 'styled-components';
import theme, { deviceQuery } from '../../../Assets/styles/font/themes';

export const Input = styled.input`
	width: 45%;
	height: 50px;
	border:${props => (props.primary ? '1px solid white;' : `1px solid ${theme.colors.primary}`)};
    box-sizing: border-box;
	border-radius: 4px;
	background: transparent;
	margin-top: ${props => props.top};
	outline: none;
	padding: 6px 0 6px 18px;
	color: ${props => props.color};
	@media ${deviceQuery.tablet} {
		width: 315px;
		padding: 6px 0 6px 18px;
	}
	::placeholder { 
		color: ${props => props.color};
		opacity: 1; 
	  }
`;
