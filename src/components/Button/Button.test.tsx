import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
	it('renders the button component', () => {
		render(<Button>Hello World</Button>);
	});
});
