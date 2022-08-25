import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import * as Styled from './textarea.styles';
import { Error } from '../Input/input.styles';

type TextArea<T extends ElementType> = {
	isRequired?: boolean;
	errors?: any;
	secondary?: boolean;
	name?: string;
} & ComponentPropsWithoutRef<T>;

const TextArea = <T extends ElementType = 'input'>({
	isRequired,
	errors,
	secondary = false,
	name,
	...rest
}: TextArea<T>): JSX.Element => (
	<>
		<Styled.TextArea {...rest} isRequired secondary={secondary} name={name} />
		{name && errors?.[name] && <Error>{errors[name]}</Error>}
	</>
);

export default TextArea;
