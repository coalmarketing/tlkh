import { Flex, Heading, Text } from "@chakra-ui/react";
import CustTable from "../Elements/CustomTable";

const Organisation = () => {
    return (
        <Flex minH="100vh" pt={{ base: "10%", lg: "unset" }} w="100%" justify="center">
            <Flex align="center" w="94%" justify="space-between" direction={{ base: "column", lg: "row" }} gap={2} position="relative">
                <Flex direction="column" py="5%" px="5%" gap={9} w="100%">
                    <Flex direction="column" gap={2} lineHeight={1.1}>
                        <Heading fontFamily="ChakraPetch" fontWeight="bold" color="primary.purple" fontSize={{ base: "3.1rem", lg: "5rem", xl: "5rem" }}>
                            ORGANIZACE STUDIA
                        </Heading>
                        <Text fontSize={{ base: "1.3rem", lg: "1.55rem" }}>
                            Níže najdete aktualizovaný učební plán, který probíhá kombinovanou formou studia.
                        </Text>
                    </Flex>
                    <Flex direction="column" lineHeight={1.1} gap={2}>
                        <Text fontSize={{ base: "2rem", xl: "3rem" }} color="primary.purple">78-42-M/01 Technické lyceum - polytechnické</Text>
                        <Text fontSize={{ base: "1.3rem", lg: "1.55rem" }}>kombinovaná forma (denní 106 hodin + dálková 22 hodin)</Text>
                    </Flex>

                    <CustTable/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Organisation;