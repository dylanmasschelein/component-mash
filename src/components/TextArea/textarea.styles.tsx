import styled, { css } from 'styled-components';

interface IProps {
	isRequired: boolean;
	secondary: boolean;
}

export const TextArea = styled('textarea')<IProps>`
	display: flex;
	padding: 10px 5px;
	border-radius: 6px;
	border: 1px solid #9a9a9a3d;
	min-height: 6rem;
	max-height: 12rem;
	max-width: 100%;

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
			background: rgba(0, 0, 0, 0.05);
		`}
`;
