import { Button, Flex, Heading } from "@chakra-ui/react";
import joinUsImage from "../../images/joinus.jpg";
import "../../fonts/fonts.css";
import { Link } from "react-router-dom";

const JoinUs = () => {
	return (
		<Flex
			direction="column"
			width="100%"
			color="white"
			align="center"
			justify="center"
			minH="40vh"
			backgroundImage={joinUsImage}
			backgroundSize="cover"
		>
			<Flex w="85%" py={{ base: "15%", lg: "5%"}} h="100%" justify="space-between" direction={{ base: "column", xl: "row"}} my="4%" gap={{ base: 3}}>
				<Flex direction="column" justify="center">
					<Heading fontFamily="ChakraPetch" fontSize={{ sm: "2.5rem", md: "4rem", xl: "5rem" }}>MÁŠ ZÁJEM?</Heading>
					<Heading fontFamily="ChakraPetch" fontSize={{ sm: "2.5rem", md: "4rem", xl: "5rem" }}>PŘIDEJ SE K NÁM!</Heading>
				</Flex>
				<Flex direction={{ base: "column", md: "row", xl: "column"}} justify="center" gap={{ base: 2, md: 5}} w={{ base: "100%", md: "70%", xl: "30%"}}>
					<Button variant="whiteBlack" width="100%" minHeight={{ base: "50px", md: "60px"}} fontSize={{ base: "1.5rem", lg: "1.7rem"}} fontWeight="normal">Dny otevřených dvěří</Button>
					<Button as={Link} to="pro-studenty#studenti-landing" variant="solidBlack" width="100%" minHeight={{ base: "50px", md: "60px"}} fontSize={{ base: "1.5rem", lg: "1.7rem"}} fontWeight="normal">Chci vědět víc!</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default JoinUs;
