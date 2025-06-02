import { Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import '../../fonts/fonts.css';
import softwareImg from '../../images/software.svg';

import autodeskIcon from "../../images/icons/software/autodesk.svg";
import bookIcon from "../../images/icons/software/book.svg";
import canvaIcon from "../../images/icons/software/canva.svg";
import creativeCloudIcon from "../../images/icons/software/creative_cloud.svg";
import msIcon from "../../images/icons/software/ms365.svg";
import solidWorksIcon from "../../images/icons/software/solidworks.svg";
import ValueCard from '../Elements/ValueCard';


interface ISoftwareCard {
	title: string;
	name: string;
	img: string;
}

const CARDS: ISoftwareCard[] = [
	{
		title: '01_',
		name: 'Office365 balíček',
		img: msIcon,
	},
	{
		title: '02_',
		name: 'AutoDesk balíček',
		img: autodeskIcon,
	},
	{
		title: '03_',
		name: 'Adobe Creative Cloud',
		img: creativeCloudIcon,
	},
	{
		title: '04_',
		name: 'Solidworks',
		img: solidWorksIcon,
	},
	{
		title: '05_',
		name: 'On-line učebnice',
		img: bookIcon,
	},
	{
		title: '06_',
		name: 'CanvaEdu',
		img: canvaIcon,
	},
];

const Software = () => {
	return (
		<Flex minH="100vh"  pt={{ base: "10%", lg: "unset"}} w="100%" justify="center" bg="linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(130, 84, 162, 0.75) 100%)">
			<Flex direction={{ base: "column", xl: "row" }} w="94%">
				<Flex direction="column" py="5%" w={{ base: "100%", xl: "60%" }} px="5%">
					<Heading fontFamily="ChakraPetch" fontWeight="bold" fontSize={{ base: "3.1rem", lg: "5rem", xl: "5rem"}}>
						Software
					</Heading>
					<Text fontSize={{ base: "1.3rem", lg: "1.55rem"}}>
						Technické Lyceum Hradec Králové k výuce využívá nástroje používané profesionály v praxi a poskytuje všem svým
						studentům licence.
					</Text>
					<Grid mt="3%" templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} h="100%" gap={{ base: 3 }}>
						{CARDS.map((card, i) => (
							<ValueCard key={i} color="rgba(88, 88, 88, 0.3)" position={{ top: 0, right: 0 }} transform="translate(25%, -25%)" heading={card.title} text={card.name} img={card.img} styles={{ minH: "150px" }} textFontSize="1.6rem" headingFontSize="3.1rem" titleColor="primary.purple" showButton={false} />
						))}
						<Flex />
						<Flex direction="column" gap={3}>
							<Button variant="solidPurple" style={{ height: '50px' }}>Licenční server</Button>
						</Flex>
					</Grid>
				</Flex>
				<Flex align="end" w={{ base: "100%", xl: "40%" }} h={{ base: "450px", md: "600px", xl: "80%" }} alignSelf="end" justify={{ base: "center", xl: "end" }}>
					<Image maxH="100%" src={softwareImg} objectFit="contain" />
				</Flex>
			</Flex>
		</Flex>


	);
};

export default Software;
