import { Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import ParentsPicture from '../../images/proRodice.png';
import '../../fonts/fonts.css';
import ValueCard from '../Elements/ValueCard';
import techIcon from "../../images/icons/parents/tech.svg";
import uniIcon from "../../images/icons/parents/uni.svg";
import worldIcon from "../../images/icons/parents/world.svg";
import { Link } from 'react-router-dom';

const CARDS = [
	{ heading: '01_', text: 'chtějí získat kvalitní základ pro vysokoškolské studium.', img: uniIcon },
	{ heading: '02_', text: 'se zajímají o techniku a moderní techologie', img: techIcon },
	{ heading: '03_', text: 'si chtějí rozšířit obzory a připravit se na široké možnosti uplatnění v moderním světě', img: worldIcon },
];

const Parents = () => {
	return (
		<Flex minH="100vh"  pt={{ base: "10%", lg: "unset"}} w="100%" justify="center" bg="primary.purple">
			<Flex w="85%" justify="space-between" direction={{ base: "column", lg: "row" }} gap={2}>
				<Flex direction="column" py="5%" maxW={{ base: "100%", lg: "65%" }}>
					<Heading fontFamily="ChakraPetch" color="white" fontWeight="bold" fontSize={{ base: "3.1rem", lg: "5rem", xl: "5rem"}}>
						PRO RODIČE
					</Heading>
					<Text fontSize={{ base: "1.3rem", lg: "1.55rem"}} color="white">
						Technické lyceum je určeno pro žáky, kteří...
					</Text>
					<Grid mt="3%" templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: "1fr", xl: 'repeat(2, 1fr)' }} gap={{ base: 3, md: 3, xl: 3 }}>
						{CARDS.map((card, i) => (
							<ValueCard linkTo="pro-rodice#landing-rodice" key={i} color="rgba(255, 255, 255, 0.3)" position={{ top: 0, right: 0 }} transform="translate(25%, -25%)" heading={card.heading} text={card.text} img={card.img} styles={{ minH: "220px" }} />
						))}
						<Flex direction="column" gap={3}>
							<Button as={Link} to="pro-rodice#landing-rodice" variant="solidWhitePurple" style={{ height: '50px' }}>Chci vědět víc</Button>
							<Button as={Link} to="pro-rodice#organizace" variant="borderWhitePurple" style={{ height: '50px' }}>Flexibilní rovzrh</Button>
						</Flex>
					</Grid>
				</Flex>
				<Flex align="end"  h={{ base: "90%", md: "auto", lg: "100%" }} justify="center">
					<Image maxH={{ base: "90%", lg: "90%" }} src={ParentsPicture} objectFit="contain" />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Parents;