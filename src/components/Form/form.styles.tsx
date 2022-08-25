import styled, { css } from 'styled-components';

interface IProps {
	secondary: boolean;
	noShadow: boolean;
}

export const Form = styled('form')<IProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 1rem;
    padding 1rem 0;
    border-radius: 6px;
	box-shadow: 0px -1px 17px rgba(0, 0, 0, 0.25);

    ${props =>
		props.noShadow &&
		css`
			box-shadow: none;
		`}

    ${props =>
		props.secondary &&
		css`
			border: 2px solid forestgreen;
		`}
`;
