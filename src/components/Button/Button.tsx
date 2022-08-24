import React, { FC } from 'react';
import './button.css';
// import { Icon } from 'semantic-ui-react';

export interface ButtonProps {
	type?: 'button' | 'submit' | 'reset' | undefined;
	styles?: string | any;
	handleClick?: any;
	text: string | JSX.Element;
	icon?: string | any;
	iconLoading?: boolean;
	image?: string;
	disabled?: boolean | string | any;
	topMargin?: boolean;
}

const Button: FC<ButtonProps> = ({
	styles,
	handleClick,
	text,
	icon,
	image,
	disabled,
	type = 'button',
	iconLoading,
	topMargin
}) => (
	<button
		type={type}
		onClick={handleClick}
		// className={`${defaultStyles.base} ${styles} ${disabled && defaultStyles.disabled} ${
		// 	topMargin && defaultStyles.margin_top
		// }`}
		className={`base ${disabled && 'disabled'}`}
		disabled={disabled}
	>
		<span style={image ? { marginRight: 12 } : {}}>{`${text} `}</span>
		{/* {icon && <Icon loading={iconLoading} name={icon} className={defaultStyles.icon} />} */}
	</button>
);

export default Button;
