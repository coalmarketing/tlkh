import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import peopleImg from "../../images/future-people.png";

const Future = () => {
    return (
        <Flex minH="100vh" pt={{ base: "10%", lg: "unset" }} w="100%" position="relative" justify="center" background="linear-gradient(to bottom left, rgba(255, 255, 255, 1) 35%, rgba(130, 84, 162, 0.75) 80%)">
            <Flex w="85%" justifySelf="end" pt="4%" direction={{ base: "column-reverse", lg: "row" }}>
                <Image src={peopleImg} maxH={{ base: "100%", md: "45%", xl: "60%", "2xl": "80%" }} objectFit={{ base: "contain", lg: "unset" }} position={{ base: "relative", lg: "absolute" }} left={0} bottom={0} zIndex={0} />
                <Flex direction="column" gap={6} align="end" pb="4%">
                    <Flex direction="column" w={{ base: "100%", xl: "60%" }} gap={2} textAlign={{ base: "start", md: "end" }} zIndex={30}>
                        <Heading fontFamily="ChakraPetch" fontSize={{ base: "2.9rem", lg: "5rem", xl: "5rem" }}>
                            VZDĚLÁNÍ S REÁLNOU HODNOTOU PRO BUDOUCNOST
                        </Heading>
                    </Flex>
                    <Flex w={{ base: "100%", lg: "56%" }} textAlign={{ base: "start", md: "end" }} direction="column" zIndex={30}>
                        <Text fontSize={{ base: "1.3rem", lg: "1.55rem" }}>
                            Technické lyceum spojuje kvalitní všeobecné vzdělání odpovídající přirodovědnému gymnáziu s odbornou přípravou v perspektivních technických oborech. Díky této kombinaci získávají absolventi dvojí výhodu – jsou připraveni jak na vysokoškolské studium, tak na uplatnění v praxi.
                        </Text>
                    </Flex>
                    <Flex w={{ base: "100%", lg: "50%" }} textAlign={{ base: "start", md: "end" }} direction="column" >
                        <Text fontSize={{ base: "1.25rem", lg: "1.45rem" }}>
                            Kromě technických znalostí klademe důraz i na rozvoj klíčových dovedností, které zaměstnavatelé oceňují – kritické myšlení, týmovou spolupráci, sebedisciplínu, adaptabilitu, komunikaci, kreativitu a respekt k názorům ostatních. Už od prvního ročníku podporujeme studenty v seberealizaci prostřednictvím praktických projektů a odborných aktivit, které přirozeně posilují jejich motivaci, inovativní myšlení a schopnost hledat originální řešení zvolených výzev.
                        </Text>
                    </Flex>
                    <Button h="60px" w={{ base: "100%", md: "25%", "2xl": "15%"}} variant="solidWhitePurple">Studijní plán</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}


export default Future;