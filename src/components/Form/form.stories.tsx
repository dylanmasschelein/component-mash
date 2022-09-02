import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Form from './Form';
import Input from '../Input';
import Button from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'componentMash/Form',
	component: Form
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Form>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Form> = args => (
	<Form {...args}>
		<Input placeholder="Hello" />
		<Input placeholder="Bro" />
		<Button>Submit</Button>
	</Form>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
	secondary: true
};
