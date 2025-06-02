import { Flex, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import graphIcon from '../../images/icons/graph-purple.svg';

const Portfolio = () => {
    return (
        <Flex minH="100vh" py={{ base: "10%", lg: "unset" }} w="100%" justify="center" background="linear-gradient(to bottom left, rgba(255, 255, 255, 1) 35%, rgba(130, 84, 162, 0.75) 80%)">
            <Flex align="center" w="85%" justify="space-between" direction={{ base: "column", lg: "row" }} gap={2} position="relative">
                <Flex align="end" position="relative" my="5%">
                    <Flex position="absolute" zIndex={10} align="start" justify="start" alignSelf="start" display={{ base: "none", lg: "flex" }}>
                        <Image maxH={{ base: "0", lg: "500px" }} src={graphIcon} />
                    </Flex>
                    <Flex w="100%" direction="column" zIndex={20} gap={6} position="relative">
                        <Flex direction="column" w={{ base: "100%", md: "75%" }} alignSelf="end" gap={8}>
                            <Heading textAlign={{ base: "start", md: "end" }} fontFamily="ChakraPetch" alignSelf={{ base: "start", lg: "end" }} fontSize={{ base: "3rem", md: "3.4rem", lg: "4rem", xl: "4.8rem" }}>
                                ODBORNÉ PORTFOLIO V SOUBĚHU SE ZNÁMKAMI
                            </Heading>
                            <Text fontSize={{ base: "1.3rem", lg: "1.55rem" }} w={{ base: "100%", lg: "90%", xl: "100%" }} alignSelf="start" textAlign={{ base: "start", md: "end" }}>
                                V souběhu s tradičním známkováním, které často nedokáže zachytit skutečný potenciál a dovednosti, stavíme i na systému odborného portfolia. Toto portfolio slouží jako konkrétní a přesvědčivý důkaz schopností každého studenta. Proces jeho vytváření zahrnuje aktivní stanovování vlastních cílů, pravidelnou sebereflexi dosaženého pokroku i výsledků, a také konstruktivní hodnocení práce spolužáků. Tento přístup významně posiluje osobní zodpovědnost studentů za své vzdělávání a rozvíjí jejich schopnost realisticky posoudit vlastní kompetence.
                            </Text>
                            <Text fontSize={{ base: "1.3rem", lg: "1.55rem" }} fontWeight="bold" alignSelf="end" textAlign={{ base: "start", md: "end" }}>
                                Portfolio může obsahovat širokou škálu prvků, například
                            </Text>
                        </Flex>
                        <Flex gap="10%" w="100%" alignSelf="end" direction={{ base: "column", xl: "row" }}>
                            <UnorderedList fontSize={{ base: "1.1rem", lg: "1.35rem" }} w={{ base: "100%", xl: "50%" }} spacing={1}>
                                <ListItem>Absolvované kurzy samostudia a online vzdělávací programy</ListItem>
                                <ListItem>Osobní výzkumné aktivity a experimenty</ListItem>
                                <ListItem>Návštěvy odborných veletrhů a exkurzí v technologických firmách</ListItem>
                                <ListItem>Vlastní projekty (individuální i skupinové)</ListItem>
                            </UnorderedList>
                            <UnorderedList fontSize={{ base: "1.1rem", lg: "1.35rem" }} w={{ base: "100%", xl: "50%" }} spacing={1} >
                                <ListItem>Úspěchy v odborných soutěžích na regionální i celostátní úrovni</ListItem>
                                <ListItem>Zkušenosti získané během odborných stáží ve spolupracujících firmách</ListItem>
                                <ListItem>Dobrovolnické aktivity související s oborem</ListItem>
                                <ListItem>Inovativní nápady a koncepty, které student vyvíjel ve svém volném čase</ListItem>
                            </UnorderedList>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}


export default Portfolio;