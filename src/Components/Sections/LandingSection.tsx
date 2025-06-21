import { Text, Flex, Heading, Button, Image } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import '../../fonts/fonts.css';
import landingImg from '../../images/landing.png';
import { Link } from 'react-router-dom';

const LandingSection = () => {
	return (
		<>
			<Helmet>
				<title>Technické lyceum Hradec Králové – Tvoje cesta, tvoje volba</title>
				<meta name="description" content="Moderní střední škola zaměřená na IT, robotiku, kyberbezpečnost, elektrotechniku a strojírenství. Flexibilní rozvrh, odborné bloky a příprava na VŠ."/>
				<meta name="keywords" content="technické lyceum, Hradec Králové, TLHK, střední škola, informatika, elektrotechnika, strojírenství, robotika, kyberbezpečnost, AI, programování, odborné bloky, stáže, moderní vzdělávání, příprava na VŠ, DO IT YOURSELF škola"/>
				<link rel="canonical" href="https://tlhk.cz/"/>
			</Helmet>
			<Flex direction="column" bg="primary.orange" w="100%" color="white" align="center" justify="end" minH="100vh">
				<Flex w="85%" direction={{ base: 'column', lg: 'row' }} gap={{ base: 3, lg: "unset" }}>
					<Flex align={{ base: "start", lg: "unset" }} direction="column" gap={4} width={{ base: "100%", lg: "40%", xl: "60%", '2xl': "40%" }} pt={{ base: "40%", md: "20%", lg: "10%" }} mb="5%">
						<Flex
							fontFamily="ChakraPetch"
							lineHeight={0.8}
							fontWeight="bold"
							gap={6}
							fontSize={{ base: '7rem', lg: '8.2rem', '2xl': '10rem', '3xl': '12rem' }}
							whiteSpace="nowrap"
							ml={{ sm: '-5px', md: '-10px' }}
						>
							<Text color="black">
								DO
							</Text>
							<Text fontStyle="italic">
								IT
							</Text>
						</Flex>
						<Heading
							lineHeight={0.8}
							color="black"
							fontSize={{ sm: '3rem', md: '50px', lg: '3.3rem', xl: '4.5rem', '2xl': '5.5rem', '3xl': '6.2rem' }}
							fontFamily="ChakraPetch"
						>
							YOURSELF.
						</Heading>
						<Heading fontSize={{ base: "1.2rem", lg: "1.4rem" }} fontWeight="bold">
							Škola, kde si rozvrh tvoříš podle sebe!
						</Heading>
						<Flex direction="column" gap={1} textAlign={{ base: "start", lg: "unset" }}>
							<Text fontSize={{ base: "1.1rem", lg: "1.3rem" }}>
								Zapomeň na jednotvárné osnovy - u nás si vybereš, co tě baví! Chceš programovat, stavět roboty nebo se ponořit
								do kyberbezpečnosti? Vyzkoušej různé obory a pak se zaměř na ten pravý. Tvoje cesta, tvoje volba.
							</Text>
							<Text fontSize={{ base: "1.2rem", lg: "1.4rem" }} fontWeight="bold">
								Tak co, jdeš do toho? 🚀
							</Text>
						</Flex>
						<Flex mt="2%" w={{ base: "100%", lg: "unset" }} gap={4}>
							<Button
								w="100%"
								h={{ base: '50px', xl: '60px' }}
								fontSize={{ base: "1.3rem", md: "1.5rem", lg: '1.1rem', xl: '1.5rem' }}
								variant="solidOrangeWhite"
								as={Link}
								to="/#studenti"
							>
								Pro studenty
							</Button>
							<Button w="100%" as={Link} to="/#rodice" replace={true} h={{ base: '50px', xl: '60px' }} fontSize={{ base: "1.3rem", md: "1.5rem", lg: '1.1rem', xl: '1.5rem' }} variant="borderOrangeWhite">
								Pro rodiče
							</Button>
						</Flex>
					</Flex>
					<Flex align="end" justify="end">
						<Image loading="eager" maxH={{ base: "60%", lg: "80%", xl: "85%", '2xl': "90%" }} src={landingImg} objectFit="contain" />
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default LandingSection;
