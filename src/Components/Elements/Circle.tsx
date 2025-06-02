import { Box, Image, StyleProps } from '@chakra-ui/react';

interface IProps {
	styles: StyleProps;
	source: string;
}

const Circle = ({ styles, source }: IProps) => {
	return (
		<Box
			position="absolute"
			height="100%"
			aspectRatio={1}
			bg="rgba(255, 255, 255, 0.2)"
			borderRadius="50%"
			alignItems="center"
			display="flex"
			justifyContent="center"
			{...styles}
		>
			<Image src={source} w="40%" aspectRatio={1}/>
		</Box>
	);
};

export default Circle;
