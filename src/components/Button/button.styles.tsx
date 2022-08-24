import styled, { css } from 'styled-components';

interface IProps {
	secondary: boolean;
	isLoading?: boolean;
}

const hoveredButton = css`
	transform: scale(104%);
	opacity: 0.9;
`;

const focusedButton = css`
	&:focus-visible {
		box-shadow: 0px 0px 3px 6px var(--outlineColor);
	}
`;

const disabledButton = css`
	cursor: not-allowed;
	opacity: 0.3;
`;

export const Button = styled('button')<IProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
	background: forestgreen;
	color: white;
	border: none;
	font-weight: 700;
	letter-spacing: 0.5px;
	transition: 0.3s;
	cursor: pointer;

	/* The GitHub button is a primary button
   * edit this to target it specifically! */
	${props =>
		props.secondary &&
		css`
			background: purple;
			color: white;
		`}
	&:hover {
		${props => !props.disabled && !props.isLoading && hoveredButton};
	}
	&:focus {
		${p => !p.disabled && !p.isLoading && focusedButton};
	}
	&:disabled {
		${disabledButton};
	}
`;
