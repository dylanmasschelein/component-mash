import styled, { css } from 'styled-components';

interface IProps {
	size: 'sm' | 'md' | 'lg';
}

export const Modal = styled('div')<IProps>`
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: table;
	transition: opacity 0.3s ease;
	background: rgba(0, 0, 0, 0.03);
	backdrop-filter: blur(10px)
		${props =>
			props.size === 'sm' &&
			css`
				height: 30rem;
			`}
		${props =>
			props.size === 'lg' &&
			css`
				height: 60rem;
			`};
`;

export const ModalContent = styled('div')`
	margin: 2rem 10px 10px 10px;
`;

export const ModalContainer = styled('div')`
	max-width: 400px;
	margin: 0px auto;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	font-family: Helvetica, Arial, sans-serif;
`;

export const ModalHeader = styled('div')`
	padding: 10px;
	background: white;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	text-align: center;
`;

export const ModalBody = styled('div')`
	background-color: white;
	text-align: left;
`;

export const ModalFooter = styled('div')`
	padding: 10px;
	background-color: white;
	display: flex;
	justify-content: center;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;

export const ModalTitle = styled('h2')`
	margin: 1rem 0 0 0;
`;
