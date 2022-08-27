import React, { Suspense, FC } from 'react';
import { useImage } from 'react-image';

export interface ImageProps {
	srcLink: string;
	alt: string;
	styles?: any;
}

const MyImageComponent: FC<ImageProps> = ({ srcLink, alt, styles }) => {
	const { src } = useImage({
		srcList: srcLink
	});

	return <img src={src} alt={alt} style={styles} />;
};

const Image: FC<ImageProps> = ({ srcLink, alt, styles }) => {
	return (
		<Suspense>
			<MyImageComponent srcLink={srcLink} alt={alt} styles={styles} />
		</Suspense>
	);
};

export default Image;
