import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

type InputProps<T extends ElementType> = {
	renderAs?: keyof JSX.IntrinsicElements['input'];
	isRequired?: boolean;
	errors?: any;
	secondary?: boolean;
	name?: string;
} & ComponentPropsWithoutRef<T>;
interface IProps {
	isRequired: boolean;
	secondary: boolean;
}

const Input = <T extends ElementType = 'input'>({
	renderAs,
	isRequired,
	errors,
	secondary = false,
	name,
	...rest
}: InputProps<T>): JSX.Element => (
	<>
		<StyledInput as={renderAs} {...rest} isRequired secondary={secondary} name={name} />
		{name && errors?.[name] && <StyledError>{errors[name]}</StyledError>}
	</>
);

export default Input;

const StyledInput = styled('input')<IProps>`
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

const StyledError = styled('p')`
	color: rgb(242, 41, 41);
	font-size: 12px;
	margin: 0;
	align-self: flex-start;
`;
