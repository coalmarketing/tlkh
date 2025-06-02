import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import typekImg from "../../images/typek-purple.png"
import { Link } from "react-router-dom";

const Profession = () => {
    return (
        <Flex minH="100vh" pt={{base: "10%", lg: "unset" }} w="100%" justify="center" background="linear-gradient(to bottom left, rgba(255, 255, 255, 1) 35%, rgba(130, 84, 162, 0.75) 80%)">
            <Flex align="center" w="85%" justify="space-between" direction={{ base: "column", lg: "row" }} gap={2} position="relative">
                <Flex direction="column" py={{ md: "5%"}} maxW={{ base: "100%", lg: "75%" }} gap={8}>
                    <Flex direction="column" gap={8}>
                        <Heading fontFamily="ChakraPetch" w={{ base: "100%", lg: "70%"}} fontWeight="bold" fontSize={{ base: "3.1rem", lg: "5rem", xl: "5rem" }}>
                            SVOBODNÁ VOLBA PROFESNÍ CESTY
                        </Heading>
                        <Text fontSize={{ base: "1.3rem", lg: "1.55rem" }} w={{ base: "100%", md: "70%" }} >
                            Lyceum umožňuje studentům postupně objevovat svůj talent a zájem v oblasti IT, elektrotechniky nebo strojírenství bez nutnosti rozhodovat se hned na začátku studia. Prostřednictvím odborných bloků si každý student vytváří vlastní vzdělávací cestu pod vedením odborných garantů, kteří pomohou s volbou nejlepšího směřování.
                        </Text>
                    </Flex>
                    <Button as={Link} to="/#oblasti-studia" variant="solidWhitePurple" width= {{ base: "100%", md: "60%" }} minHeight= "60px" fontSize= {{ base: "1rem", xl: "1.8rem"}} fontWeight= "normal">Kompletné seznam odborných bloků</Button>
                </Flex>
                <Image src={typekImg} maxH={{ base: "60%", md: "65%", xl: "80%", "2xl": "90%" }} objectFit={{ base: "contain", lg: "unset" }} position={{ base: "relative", lg: "absolute" }} right={0} bottom={0} zIndex={0} />
            </Flex>
        </Flex>
    )
}

export default Profession;