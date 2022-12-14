import { render } from '@testing-library/react';
import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

type InputProps<T extends ElementType> = {
	renderAs?: keyof JSX.IntrinsicElements['input'];
	isRequired?: boolean;
	errors?: any;
	name?: string;
	color?: string;
	width?: string;
} & ComponentPropsWithoutRef<T>;

interface IProps {
	isRequired: boolean;
}

interface IDivProps {
	width: string;
	error: boolean;
	color?: string;
}

const InlineInput = <T extends ElementType = 'input'>({
	renderAs,
	isRequired,
	errors,
	name,
	color = '',
	width = '',
	placeholder,
	...rest
}: InputProps<T>): JSX.Element => (
	<>
		<StyledMainDiv width={width} error={Boolean(name && errors?.[name])} color={color}>
			<StyledLabel>
				{placeholder}
				{isRequired && <RequiredSpan>*</RequiredSpan>}
			</StyledLabel>
			<StyledInput as={renderAs} {...rest} isRequired name={name} />
		</StyledMainDiv>
		{name && errors?.[name] && <StyledError>{errors[name]}</StyledError>}
	</>
);

export default InlineInput;

const StyledMainDiv = styled('div')<IDivProps>`
	display: flex;
	flex-direction: column;
	padding: 5px 5px;
	border-radius: 6px;
	border: 1px solid #808080;
	margin: 1rem 0 0;
	width: 100%;

	&:focus-within {
		outline: #8a2be2;
		border: #8a2be2 solid thin;
	}

	&::placeholder {
		color: #c5c5c5;
	}

	${({ width }: any) =>
		width &&
		css`
			width: ${width};
		`}

	${({ color }) =>
		color &&
		css`
			&:focus-within {
				outline: ${color};
				border: 2px ${color} solid;
			}
		`}
	
		${({ error }) =>
		error &&
		css`
			&:focus-within {
				outline: rgb(242, 41, 41);
				border: 2px rgb(242, 41, 41) solid;
			}
		`}
`;

const RequiredSpan = styled('span')`
	color: rgb(242, 41, 41);
	padding-left: 1px;
`;

const StyledLabel = styled('label')`
	font-size: 12px;
	color: #808080;
`;

const StyledError = styled('p')`
	color: rgb(242, 41, 41);
	font-size: 12px;
	margin: 0;
	align-self: flex-start;

	${({ width }: any) =>
		width &&
		css`
			width: ${width};
		`}
`;

const StyledInput = styled('input')<IProps>`
	outline: none;
	border: none;
	padding: 2px 0 0 0;

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		background: white;
	}
`;
