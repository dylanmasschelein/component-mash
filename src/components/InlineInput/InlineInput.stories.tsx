import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InlineInput from './InlineInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'componentMash/InlineInput',
	component: InlineInput
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InlineInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InlineInput> = args => <InlineInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	placeholder: 'min price',
	name: 'georgie',
	errors: { georgie: 'needs to be min 8 chars' },
	onChange: (e: any) => console.log(e.target.value, 'hmm', e.target.name)
};

export const Secondary = Template.bind({});
Secondary.args = {
	secondary: true
};
