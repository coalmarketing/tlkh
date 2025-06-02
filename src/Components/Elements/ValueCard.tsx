import { Flex, Heading, StyleProps, Text } from '@chakra-ui/react';
import Circle from './Circle';
import { Link } from 'react-router-dom';
import '../../fonts/fonts.css';

export interface IValueProps {
	heading: string;
	text?: string;
	img: string;
	color: string;
	position: IPosition;
	transform: string;
	styles?: StyleProps;
	textColor?: string;
	titleColor?: string;
	showButton?: boolean;
	headingFontSize?: string;
	textFontSize?: string;
	linkTo?: string;
}

interface IPosition {
	top?: number;
	bottom?: number;
	right?: number;
	left?: number;
}

const ValueCard = ({ heading, text, img, color, position, transform, styles, textColor, titleColor, showButton = true, headingFontSize, textFontSize, linkTo="/" }: IValueProps) => {
	return (
		<Flex
			w="100%"
			minH="150px"
			position="relative"
			bg={color}
			backdropFilter="blur(5px)"
			overflow="hidden"
			justify="space-between"
			p={5}
			{...styles}
		>
			<Circle source={img} styles={{ ...position, transform: transform }} />
			<Flex direction="column" gap={2} color={textColor ? textColor : "white"} position="relative" maxW="70%">
				<Heading fontFamily="ChakraPetch" fontWeight="normal" fontSize={ headingFontSize ? headingFontSize : "2.5rem"} color={titleColor ? titleColor : "white"}>
					{heading}
				</Heading>
				<Text fontFamily="Mundial" fontSize={textFontSize ? textFontSize : "1.1rem"} color={textColor ? textColor : "white"}>
					{text}
				</Text>
				{
					showButton && (
						<Text as={Link} to={linkTo} textDecoration="underline">
							Více informací
						</Text>
					)
				}
			</Flex>
		</Flex>
	);
};

export default ValueCard;
