import { Button, Flex, Heading, StyleProps } from "@chakra-ui/react";
import openDoorsImage from "../../images/otevreneDvere.jpg";
import { Link } from "react-router-dom";

interface IProps {
	styles?: StyleProps;
}

const OpenDoors = ({styles}: IProps) => {
	return (
		<Flex
			direction="column"
			width="100%"
			color="white"
			align="center"
			justify="center"
			minH="40vh"
			backgroundSize={{ base: "200%", md: "100%"}}
            backgroundPosition={{ base: "15% 60%", md: "0% 60%"}}
            backgroundRepeat="no-repeat"
			backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${openDoorsImage})`}
		>
			<Flex w="80%" direction="column" gap={4} align="center" justify="center" py={{ base: "15%", lg: "5%"}}>
				<Flex direction="column" textAlign="center">
					<Heading fontFamily="ChakraPetch" fontSize={{ sm: "2.5rem", md: "4rem", xl: "5rem" }}>PŘIJĎ NA DEN OTEVŘENÝCH DVEŘÍ!</Heading>
				</Flex>
				<Flex gap={{base: 3, md: 5}} w={{ base: "100%", md: "75%", xl: "60%" }} direction={{ base: "column", md: "row" }}>
					<Button as={Link} to="https://www.hradebni.cz/dny-otevrenych-dveri" target="_blank" variant="blueWhite" width= "100%" minHeight= "60px" fontSize= {{ base: "1.2rem", xl: "1.7rem"}} fontWeight= "normal" {...styles}>Více o dnu otevřených dveří</Button>
					<Button as={Link} to="https://www.hradebni.cz/dny-otevrenych-dveri" target="_blank" variant="whiteBlue" width= {{ sm: "100%", md: "70%"}} minHeight= "60px" fontSize= {{ base: "1.2rem", xl: "1.7rem"}} fontWeight= "normal">Všechny termíny</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default OpenDoors;