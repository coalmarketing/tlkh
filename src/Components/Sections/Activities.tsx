import { Flex, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import typekImg from '../../images/typek-blue.jpg';

const Activities = () => {
    return (
        <Flex minH="100vh" py={{ base: "10%", lg: "unset" }} w="100%" justify="center" background="linear-gradient(to bottom left, rgba(255, 255, 255, 1) 35%, rgba(62, 166, 222, 0.75) 80%)">
            <Flex w="85%" justify="space-between" direction={{ base: "column", lg: "row" }} gap={2} position="relative">
                <Flex direction="column" py="5%" maxW={{ base: "100%", lg: "75%" }} gap={8}>
                    <Flex direction="column" gap={2}>
                        <Heading fontFamily="ChakraPetch" fontWeight="bold" fontSize={{ base: "3.1rem", lg: "5rem", xl: "5rem" }}>
                            MIMOŠKOLNÍ AKTIVITY
                        </Heading>
                        <Text fontSize={{ base: "1.3rem", lg: "1.55rem" }} w={{ base: "100%", md: "70%"}} >
                            Škola není jen o učení a testech. Nabízíme aktivity, které ti můžou zpestřit školní rutinu a možná i najít nové zájmy. Rozhodně lepší než jen sedět v lavici nebo doma u počítače.
                        </Text>
                    </Flex>
                    <Flex direction={{ base: "column", "2xl": "row" }} gap={4} w="100%">
                        <Flex direction="column" gap={2}>
                            <Text fontWeight="bold" fontSize={{ base: "1.3rem", lg: "1.55rem" }}>
                                Co u nás můžeš zažít?
                            </Text>
                            <Flex gap={6} direction={{base: "column", md: "row"}}>
                                <Flex>
                                    <UnorderedList spacing={1} fontSize={{ base: "1.1rem", lg: "1.15rem" }} px="1%">
                                        <ListItem>Klíčové projekty, na kterých pracoval</ListItem>
                                        <ListItem>Získané certifikace</ListItem>
                                        <ListItem>Dovednosti osvojené během stáží</ListItem>
                                        <ListItem>Reflexi odborných aktivit</ListItem>
                                    </UnorderedList>
                                </Flex>
                                <Flex>
                                    <UnorderedList spacing={1} fontSize={{ base: "1.1rem", lg: "1.15rem" }} px="1%">
                                        <ListItem>Klíčové projekty, na kterých pracoval</ListItem>
                                        <ListItem>Získané certifikace</ListItem>
                                        <ListItem>Dovednosti osvojené během stáží</ListItem>
                                        <ListItem>Reflexi odborných aktivit</ListItem>
                                    </UnorderedList>
                                </Flex>

                            </Flex>
                        </Flex>
                        <Flex direction="column" gap={2} w={{ base: "100%", md: "80%", "2xl": "40%"}}>
                            <Text fontWeight="bold" fontSize={{ base: "1.3rem", lg: "1.55rem" }}>
                                Máš jiný nápad?
                            </Text>
                            <Text fontSize={{ base: "1.1rem", lg: "1.15rem" }}>
                                Pokud ti v nabídce něco chybí a máš nápad na vlastní aktivitu, můžeš s tím přijít. Prostory, základní vybavení a občas i nějaké peníze se dají zařídit. Je to tvoje škola, tak ji zkus aspoň trochu přizpůsobit podle sebe.
                            </Text>
                            <Text fontSize={{ base: "1.1rem", lg: "1.15rem" }}>
                                Střední škola je jen pár let tvého života - můžeš je prosedět, nebo z nich něco vytěžit.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex align="end" display={{ base: "none", md: "flex"}} h={{ base: "50%", lg: "60%", xl: "100%" }} position={{ base: "relative", lg: "absolute" }} right={{ base: 0 ,lg: -20}} bottom={0} justify="center">
                    <Image maxH={{ base: "80%", lg: "90%" }} mixBlendMode="multiply" src={typekImg} objectFit="contain" />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Activities;