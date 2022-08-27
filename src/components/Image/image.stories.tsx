import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
const photo = require('../../../public/me.jpg');

import Image from './Image';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'componentMash/Image',
	component: Image
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = args => <Image {...args} />;

export const PrimaryImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryImage.args = {
	srcLink: photo,
	alt: 'bananas',
	styles: { height: '100vh' }
};

export const SecondaryImage = Template.bind({});
SecondaryImage.args = {};
