import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from './Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'componentMash/Dropdown',
	component: Dropdown
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = args => (
	<Dropdown
		// options={}
		{...args}
	/>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	options: [
		{ label: 'F1', value: 'f1' },
		{ label: 'Hockey', value: 'hockey' }
	],
	toggleDropdown: () => console.log('toggle'),
	handleOptionClick: () => console.log('click'),
	selectedOption: { label: 'Hockey', value: 'hockey' }
};

export const Secondary = Template.bind({});
Secondary.args = {};
