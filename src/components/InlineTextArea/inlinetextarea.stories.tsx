import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InlineTextArea from './InlineTextArea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'componentMash/InlineTextArea',
	component: InlineTextArea
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InlineTextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InlineTextArea> = args => <InlineTextArea {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	placeholder: 'About',
	name: 'georgie',
	onChange: (e: any) => console.log(e.target.value, 'hmm', e.target.name)
};

export const Secondary = Template.bind({});
Secondary.args = {
	secondary: true
};
