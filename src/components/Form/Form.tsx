import React, { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import * as Styled from './form.styles';

type FormProps<T extends ElementType> = {
	secondary?: boolean;
	children: ReactNode;
	noShadow?: boolean;
} & ComponentPropsWithoutRef<T>;

const Form = <T extends ElementType = 'form'>({
	secondary = false,
	children,
	noShadow = false
}: FormProps<T>): JSX.Element => (
	<Styled.Form secondary={secondary} noShadow={noShadow}>
		{children}
	</Styled.Form>
);

export default Form;
