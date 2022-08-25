import styled, { css } from 'styled-components';

interface IProps {
	isRequired: boolean;
	secondary: boolean;
}

export const Input = styled('input')<IProps>`
	padding: 10px 5px;
	border-radius: 6px;
	border: 1px solid #9a9a9a3d;
	margin: 0.5rem 0;

	&:focus-visible {
		outline: forestgreen;
		border: 2px forestgreen solid;
	}

	&::placeholder {
		color: #c5c5c5;
	}
	${props =>
		props.secondary &&
		css`
			background: lightgrey;
		`}
`;

export const Error = styled('p')`
	color: rgb(242, 41, 41);
	font-size: 12px;
	margin: 0;
	align-self: flex-start;
`;
