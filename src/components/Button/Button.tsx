import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
	secondary: boolean;
	isLoading?: boolean;
	width?: string;
}

type ButtonProps<T extends ElementType> = {
	renderAs?: keyof JSX.IntrinsicElements['button'];
	isLoading?: boolean;
	isCompleted?: boolean;
	secondary?: boolean;
	children: ReactNode;
	width?: string;
	color?: string;
} & ComponentPropsWithoutRef<T>;

// 💡 In generic the HTML type of component will be specified. And by default it is button
const Button = <T extends ElementType = 'button'>({
	renderAs,
	isLoading,
	isCompleted,
	children,
	secondary,
	color = '',
	width = '',
	...rest
}: ButtonProps<T>): JSX.Element => {
	return (
		<StyledButton
			as={renderAs}
			isLoading={isLoading}
			secondary={secondary || false}
			isCompleted={isCompleted}
			width={width}
			color={color}
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
	margin: 1rem;
	width: 11rem;
	background: #8a2be2;
	color: white;
	border: none;
	font-weight: 700;
	letter-spacing: 0.5px;
	transition: 0.3s;
	cursor: pointer;

	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}

	${({ color }) =>
		color &&
		css`
			background: ${color};
		`}

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
