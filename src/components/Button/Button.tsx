import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import * as Styled from './button.styles';

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
		<Styled.Button
			as={renderAs}
			isLoading={isLoading}
			secondary={secondary || false}
			isCompleted={isCompleted}
			{...rest}
		>
			{children}
		</Styled.Button>
	);
};

export default Button;
