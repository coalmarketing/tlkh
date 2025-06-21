import { Button, Flex, Grid, Heading, Image } from '@chakra-ui/react';
import StudentPicture from '../../images/proStudenty.png';
import mathIcon from "../../images/icons/students/math.svg";
import thingsIcon from "../../images/icons/students/nove_veci.svg";
import coopIcon from "../../images/icons/students/spoluprace.svg";
import uniIcon from "../../images/icons/students/uni.svg";
import sienceIcon from "../../images/icons/students/veda.svg";
import challengeIcon from "../../images/icons/students/vyzvy.svg";
import ValueCard from '../Elements/ValueCard';
import { Link } from 'react-router-dom';


const Students = () => {
	const cards = [
		{ heading: '01_', text: 'tě baví technika, věda a objevování nových věcí!', img: mathIcon },
		{ heading: '02_', text: 'chceš mít otevřené dveře do budoucnosti', img: thingsIcon },
		{ heading: '03_', text: 'máš rád/a výzvy a přemýšlíš logicky', img: coopIcon },
		{ heading: '04_', text: 'se chceš naučit nové věci a rozvíjet se', img: uniIcon },
		{ heading: '05_', text: 'zvládáš matiku a přírodovědu ze základky', img: sienceIcon },
		{ heading: '06_', text: 'nechybí ti nápady a rád/a spolupracuješ', img: challengeIcon },
	];

	return (
		<Flex
			direction="column"
			width="100%"
			bg="primary.blue"
			color="white"
			align="center"
			pt="2%"
		>
			<Flex w="85%" pt={{ base: "10%", lg: "unset"}} minH="100vh" direction={{ base: "column-reverse", '2xl': "row" }}>
				<Flex w={{ base: "100%", lg: "55%"}} alignSelf={{ base: "center", '2xl': "unset"}}  align={{ base: "center", '2xl': "end"}} >
					<Image src={StudentPicture} w="100%" objectFit="contain" />
				</Flex>
				<Flex w={{ base: "100%", '2xl': "45%" }} direction="column" gap={3} mt="2%" mb="3%">
					<Flex direction="column" w="100%">
						<Heading fontSize={{ base: "3.2rem", lg: "5rem", xl: "5rem"}} fontFamily="ChakraPetch">
							PRO STUDENTY
						</Heading>
						<Heading fontSize={{ base: "1.3rem", lg: "1.55rem"}} fontFamily="Mundial" fontWeight="normal">
							Hledáme právě tebe, pokud...
						</Heading>
					</Flex>

					<Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={{ base: 3, md: 3, xl: 3 }}>
						{cards.map((card) => (
							<ValueCard color="rgba(255, 255, 255, 0.3)" position={{top: 0, right: 0}} transform="translate(25%, -25%)" heading={card.heading} text={card.text} img={card.img} />
						))}
						<Button variant="solidWhiteBlue" as={Link} to="/pro-studenty#studenti-landing"  style={{ height: '50px' }} >To mě zajímá!</Button>
						<Button variant="borderWhiteBlue" style={{ height: '50px' }} as={Link} to="/pro-studenty/#software" >Software pro studenty</Button>
					</Grid>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Students;
