import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

type TextArea<T extends ElementType> = {
	isRequired?: boolean;
	errors?: any;
	secondary?: boolean;
	name?: string;
} & ComponentPropsWithoutRef<T>;
interface IProps {
	isRequired: boolean;
	secondary: boolean;
}

const TextArea = <T extends ElementType = 'input'>({
	isRequired,
	errors,
	secondary = false,
	name,
	...rest
}: TextArea<T>): JSX.Element => (
	<>
		<StyledTextArea {...rest} isRequired secondary={secondary} name={name} />
		{name && errors?.[name] && <StyledError>{errors[name]}</StyledError>}
	</>
);

export default TextArea;

const StyledError = styled('p')`
	color: rgb(242, 41, 41);
	font-size: 12px;
	margin: 0;
	align-self: flex-start;
`;

const StyledTextArea = styled('textarea')<IProps>`
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
