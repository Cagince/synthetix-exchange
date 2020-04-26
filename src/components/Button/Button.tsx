import styled, { css } from 'styled-components';

type ButtonProps = {
	size?: 'xs' | 'sm' | 'md' | 'lg';
	palette?: 'primary' | 'secondary' | 'outline';
	isActive?: boolean;
};

const Button = styled.button<ButtonProps>`
	font-family: ${(props) => props.theme.fonts.medium};
	border-radius: 1px;
	height: 48px;
	font-size: 16px;
	letter-spacing: 0.5px;
	&:disabled {
		opacity: 0.5;
		cursor: default;
	}
	border: none;
	text-transform: uppercase;
	white-space: nowrap;
	cursor: pointer;
	outline: none;
	padding: 0 15px;

	${(props) =>
		props.size === 'xs' &&
		css`
			height: 24px;
			font-size: 11px;
		`}

	${(props) =>
		props.size === 'sm' &&
		css`
			height: 32px;
			font-size: 14px;
		`}

	${(props) =>
		props.size === 'md' &&
		css`
			height: 40px;
			font-size: 14px;
		`}

	${(props) =>
		props.palette === 'primary' &&
		css`
			color: ${(props) => props.theme.colors.white};
			background-color: ${(props) => props.theme.colors.buttonDefault};
			&:hover {
				&:not(:disabled) {
					background-color: ${(props) => props.theme.colors.buttonHover};
				}
			}
			${(props) =>
				(props as ButtonProps).isActive &&
				css`
					background-color: ${(props) => props.theme.colors.buttonHover};
				`}
		`}

	${(props) =>
		props.palette === 'secondary' &&
		css`
			color: ${(props) => props.theme.colors.fontTertiary};
			background-color: ${(props) => props.theme.colors.accentL1};
			&:hover {
				&:not(:disabled) {
					background-color: ${(props) => props.theme.colors.accentL2};
				}
			}
			${(props) =>
				(props as ButtonProps).isActive &&
				css`
					background-color: ${(props) => props.theme.colors.accentL2};
				`}
		`}

	${(props) =>
		props.palette === 'outline' &&
		css`
			border-radius: 1px;
			color: ${(props) => props.theme.colors.buttonDefault};
			background-color: ${(props) => props.theme.colors.white};
			border: 1px solid ${(props) => props.theme.colors.buttonDefault};
			&:hover {
				&:not(:disabled) {
					background-color: ${(props) => props.theme.colors.accentL2};
				}
			}
			${(props) =>
				(props as ButtonProps).isActive &&
				css`
					background-color: ${(props) => props.theme.colors.buttonHover};
				`}
		`}	
`;

export default Button;