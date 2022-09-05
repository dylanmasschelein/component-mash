import React, { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type FormProps<T extends ElementType> = {
	secondary?: boolean;
	children: ReactNode;
	noShadow?: boolean;
	width?: string;
	margin?: string;
	padding?: string;
} & ComponentPropsWithoutRef<T>;

interface IProps {
	secondary: boolean;
	noShadow: boolean;
	width?: string;
	margin?: string;
	pad?: string;
}

const Form = <T extends ElementType = 'form'>({
	secondary = false,
	children,
	noShadow = false,
	width = '',
	margin = '',
	pad = '',
	...rest
}: FormProps<T>): JSX.Element => (
	<StyledForm {...rest} secondary={secondary} noShadow={noShadow} width={width} margin={margin} pad={pad}>
		{children}
	</StyledForm>
);

export default Form;

const StyledForm = styled('form')<IProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 1rem;
    padding 1rem 0;
    border-radius: 6px;
	box-shadow: 0px -1px 17px rgba(0, 0, 0, 0.25);

	${({ pad }) =>
		pad &&
		css`
			padding: ${pad};
		`}

	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}

    ${({ noShadow }) =>
		noShadow &&
		css`
			box-shadow: none;
		`}

    ${({ margin }) =>
		margin &&
		css`
			margin: ${margin};
		`}

    ${({ secondary }) =>
		secondary &&
		css`
			border: 2px solid forestgreen;
		`}
`;
