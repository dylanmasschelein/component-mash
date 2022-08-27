import React, { FC } from 'react';
import styled from 'styled-components';

export interface IDropdownOption {
	label: string | number;
	value: string | number;
}

export interface DropdownProps {
	options: IDropdownOption[];
	isOpen: boolean;
	selectedOption: IDropdownOption;
	toggleDropdown: () => void;
	handleOptionClick: (o: string | number) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, isOpen, selectedOption, toggleDropdown, handleOptionClick }) => (
	<DropDownContainer>
		<DropDownHeader onClick={toggleDropdown}>{selectedOption.label || 'Select an option'}</DropDownHeader>
		{isOpen && (
			<DropDownListContainer>
				<DropDownList>
					{options.map((option: IDropdownOption, idx: number) => (
						<ListItem onClick={() => handleOptionClick(option.value)} key={`${option.label}-${idx}`}>
							{option.label}
						</ListItem>
					))}
				</DropDownList>
			</DropDownListContainer>
		)}
	</DropDownContainer>
);

export default Dropdown;

const DropDownContainer = styled('div')`
	width: 100%;
`;

const DropDownHeader = styled('div')`
	padding: 0.4rem 2rem 0.4rem 1rem;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
	font-weight: 500;
	font-size: 1.3rem;
	background: #ffffff;
`;

const DropDownListContainer = styled('div')``;

const DropDownList = styled('ul')`
	padding: 0.5rem 1rem;
	margin: 0;
	background: #ffffff;
	outline: 1px solid #e5e5e5;
	box-sizing: border-box;
	font-size: 1.3rem;
	font-weight: 500;
	transition: 0.3s;
`;

const ListItem = styled('li')`
	list-style: none;
	margin-bottom: 0.8em;
`;
