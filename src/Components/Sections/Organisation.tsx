import { Flex, Heading, Text } from "@chakra-ui/react";
import CustTable from "../Elements/CustomTable";

const Organisation = () => {
    const onsiteTableData = [
        { subject: 'Český jazyk, kultura a dějiny', hours: [3, 3, 3, 3, 12] },
        { subject: 'Základy společenských věd', hours: [0, 2, 1, 1, 4] },
        { subject: 'Anglický jazyk', hours: [3, 3, 3, 4, 13] },
        { subject: 'Německý jazyk', hours: [2, 2, 2, 2, 8] },
        { subject: 'Přírodovědný základ', hours: [3, 3, 2, 2, 10] },
        { subject: 'Fyzika', hours: [4, 4, 3, 3, 14] },
        { subject: 'Matematika', hours: [5, 3, 3, 3, 14] },
        { subject: 'Tělesná výchova', hours: [2, 2, 2, 2, 8] },
        { subject: 'Digitální a mediální gramotnost', hours: [2, 2, 0, 0, 4] },
        { subject: 'Deskriptivní geometrie', hours: [0, 3, 2, 0, 5] },
        { subject: 'CAD systémy a dokumentace', hours: [3, 2, 2, 0, 7] },
        { subject: 'Ekonomika a podnikání', hours: [0, 0, 2, 2, 4] },
        { subject: 'Kompetenční rámec', hours: [1, 0.5, 0.5, 1, 3] },
    ];

    const remoteTableData = [
        { subject: 'Odborný blok', hours: [3, 3, 0, 0, 6] },
        { subject: 'Odborný blok I', hours: [0, 0, 4, 4, 8] },
        { subject: 'Odborný blok II', hours: [0, 0, 4, 13] },
        { subject: 'Celkem', hours: [31, 32.5, 33.5, 31, 128] },
    ];
    
    const ratioTableData = [
        { subject: 'Počet vyučovacích hodin v prezenční formě studia za týden', hours: [29, 28.5, 24.5, 24, 106] },
        { subject: 'Počet vyučovacích hodin v dálkové formě studia za týden', hours: [3, 3, 8, 8, 22] },
        { subject: 'Zastoupení dálkové formy studia', hours: ["9%", "10%", "25%", "25%", "17%"] },
        { subject: 'Celkem:', hours: [32, 31.5, 32.5, 32, 128] },
    ];

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