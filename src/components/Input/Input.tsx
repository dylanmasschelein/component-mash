import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import * as Styled from './input.styles';

type InputProps<T extends ElementType> = {
	renderAs?: keyof JSX.IntrinsicElements['input'];
	isRequired?: boolean;
	errors?: any;
	secondary?: boolean;
	name?: string;
} & ComponentPropsWithoutRef<T>;

const Input = <T extends ElementType = 'input'>({
	renderAs,
	isRequired,
	errors,
	secondary = false,
	name,
	...rest
}: InputProps<T>): JSX.Element => (
	<>
		<Styled.Input as={renderAs} {...rest} isRequired secondary={secondary} name={name} />
		{name && errors?.[name] && <Styled.Error>{errors[name]}</Styled.Error>}
	</>
);

export default Input;
