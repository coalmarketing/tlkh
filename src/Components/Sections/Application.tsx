import { Button, Flex, Heading } from "@chakra-ui/react";
import joinUsImage from "../../images/landingYouIn.jpeg";
import "../../fonts/fonts.css";
import { Link } from "react-router-dom";

interface IProps {
	wantMoreButtonHidden?: boolean;
}

const Application = ({wantMoreButtonHidden = false}: IProps) => {
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
			<Flex w="80%"  direction="column" gap={4} align="center" justify="center" py={{ base: "15%", lg: "5%"}}>
				<Flex direction="column" textAlign="center">
					<Heading fontFamily="ChakraPetch" fontSize={{ sm: "2.5rem", md: "4rem", xl: "5rem" }}>TAK CO, JDEŠ DO TOHO? 🚀</Heading>
				</Flex>
				<Flex gap={{base: 3, md: 5}} w={{ base: "100%", xl: "50%" }} direction={{ base: "column", md: "row" }}>
					<Button as={Link} to="/pro-studenty#studenti-landing" hidden={wantMoreButtonHidden} variant="whiteTrasnparent" width= "100%" minHeight= "60px" fontSize= {{ base: "1.3rem", xl: "1.8rem"}} fontWeight= "normal">Chci vědět víc!</Button>
					<Button as={Link} to="https://dipsy.gov.cz/prihlaska/intro" target="_blank" variant="solidWhitePurple" width= "100%" minHeight= "60px" fontSize= {{ base: "1.3rem", xl: "1.8rem"}} fontWeight= "normal">Podat přihlášku</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Application;
