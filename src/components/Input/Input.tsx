import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

type InputProps<T extends ElementType> = {
	renderAs?: keyof JSX.IntrinsicElements['input'];
	isRequired?: boolean;
	errors?: any;
	secondary?: boolean;
	name?: string;
	color?: string;
	width?: string;
} & ComponentPropsWithoutRef<T>;
interface IProps {
	isRequired: boolean;
	secondary: boolean;
	width: string;
}

const Input = <T extends ElementType = 'input'>({
	renderAs,
	isRequired,
	errors,
	secondary = false,
	name,
	color = '',
	width = '',
	...rest
}: InputProps<T>): JSX.Element => (
	<>
		<StyledInput as={renderAs} {...rest} isRequired secondary={secondary} name={name} width={width} />
		{name && errors?.[name] && <StyledError>{errors[name]}</StyledError>}
	</>
);

export default Input;

const StyledInput = styled('input')<IProps>`
	padding: 10px 5px;
	border-radius: 6px;
	border: 1px solid #9a9a9a3d;
	margin: 0.5rem 0;
	width: 100%;

	&:focus-visible {
		outline: #8a2be2;
		border: #8a2be2 solid;
	}

	&::placeholder {
		color: #c5c5c5;
	}

	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}

	${({ color }) =>
		color &&
		css`
			&:focus-visible {
				outline: ${color};
				border: 2px ${color} solid;
			}
		`}

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
