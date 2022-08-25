import React, { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type FormProps<T extends ElementType> = {
	secondary?: boolean;
	children: ReactNode;
	noShadow?: boolean;
} & ComponentPropsWithoutRef<T>;

interface IProps {
	secondary: boolean;
	noShadow: boolean;
}

const Form = <T extends ElementType = 'form'>({
	secondary = false,
	children,
	noShadow = false
}: FormProps<T>): JSX.Element => (
	<StyledForm secondary={secondary} noShadow={noShadow}>
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

    ${props =>
		props.noShadow &&
		css`
			box-shadow: none;
		`}

    ${props =>
		props.secondary &&
		css`
			border: 2px solid forestgreen;
		`}
`;
