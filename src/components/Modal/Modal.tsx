import React, { FC, ReactNode } from 'react';
import Button from '../Button';
import * as Styled from './modal.styles';

export interface IProps {
	toggle: any;
	size?: 'sm' | 'md' | 'lg';
	children: ReactNode;
	btnText: string;
	hdrText: string;
	onClick?: any;
}

const Modal: FC<IProps> = ({ toggle, size = 'md', children, btnText, hdrText, onClick }) => (
	<Styled.Modal onClick={toggle} size={size}>
		<Styled.ModalContent>
			<Styled.ModalContainer>
				<Styled.ModalHeader>
					<Styled.ModalTitle>{hdrText}</Styled.ModalTitle>
				</Styled.ModalHeader>
				<Styled.ModalBody>{children}</Styled.ModalBody>
				<Styled.ModalFooter>
					<Button onClick={onClick ? onClick : toggle}>{btnText}</Button>
				</Styled.ModalFooter>
			</Styled.ModalContainer>
		</Styled.ModalContent>
	</Styled.Modal>
);

export default Modal;
