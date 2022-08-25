import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';
import Form from '../Form';
import Input from '../Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'componentMash/Modal',
	component: Modal
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = args => (
	<Modal {...args} hdrText="Welcome to my Modal!" btnText="Carry on" onClick={() => console.log('test')}>
		<Form noShadow>
			<Input placeholder="Hello" />
			<Input placeholder="Bro" />
		</Form>
	</Modal>
);

export const PrimaryModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryModal.args = {};

export const LargeModal = Template.bind({});
LargeModal.args = {
	size: 'lg'
};

export const SmallModal = Template.bind({});
LargeModal.args = {
	size: 'sm'
};
