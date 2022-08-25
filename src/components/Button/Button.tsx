import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
	secondary: boolean;
	isLoading?: boolean;
}

type ButtonProps<T extends ElementType> = {
	renderAs?: keyof JSX.IntrinsicElements['button'];
	isLoading?: boolean;
	isCompleted?: boolean;
	secondary?: boolean;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// 💡 In generic the HTML type of component will be specified. And by default it is button
const Button = <T extends ElementType = 'button'>({
	renderAs,
	isLoading,
	isCompleted,
	children,
	secondary,
	...rest
}: ButtonProps<T>): JSX.Element => {
	return (
		<StyledButton
			as={renderAs}
			isLoading={isLoading}
			secondary={secondary || false}
			isCompleted={isCompleted}
			{...rest}
		>
			{children}
		</StyledButton>
	);
};

export default Button;

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

const StyledButton = styled('button')<IProps>`
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
