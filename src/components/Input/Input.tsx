import React, { FC } from 'react';
import './input.css';

interface InputProps {
	type?: 'text' | 'password' | 'email' | 'tel';
	manuelOveride?: any; // Obj
	value: string;
	name: string;
	onChange: any;
	label?: string;
	errors?: any;
	required?: boolean;
}

const Input: FC<InputProps> = ({ type, required, manuelOveride, value, name, onChange, label, errors }) => (
	<>
		<input
			type={type || 'text'}
			placeholder={label || ''}
			className={`input`}
			style={{ ...manuelOveride }}
			value={value}
			name={name}
			onChange={onChange}
		/>
		{errors?.[name] && <p className="input_error">{errors[name]}</p>}
	</>
);

export default Input;
