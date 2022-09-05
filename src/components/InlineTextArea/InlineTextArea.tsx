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
}

interface IDivProps {
	error: boolean;
	color?: string;
}

const TextArea = <T extends ElementType = 'input'>({
	isRequired,
	errors,
	name,
	color = '',
	placeholder,
	...rest
}: TextArea<T>): JSX.Element => (
	<>
		<StyledMainDiv error={Boolean(name && errors?.[name])} color={color}>
			<StyledLabel>
				{placeholder}
				{isRequired && <RequiredSpan>*</RequiredSpan>}
			</StyledLabel>
			<StyledTextarea {...rest} isRequired name={name} />
		</StyledMainDiv>
		{name && errors?.[name] && <StyledError>{errors[name]}</StyledError>}
	</>
);

export default TextArea;

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

const StyledTextarea = styled('textarea')<IProps>`
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
