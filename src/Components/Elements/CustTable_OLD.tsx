import { Table, Thead, Tbody, Tr, Th, Td, Flex, Text } from '@chakra-ui/react';

export interface ISubjectTableRow {
    subject: string;
    hours: number[] | string[];
}

interface IProps {
    data: ISubjectTableRow[];
}

const CustTable = ({data}: IProps) => {
    return (
        <Flex w="100%" overflowX="auto">
            <Flex
                w="3%"
                minW="50px"
                bg="primary.purple"
                justifyContent="center"
                alignItems="center">
                <Text fontSize={{ base: "1.1rem", lg: "1.35rem" }} color="white" transform="rotate(180deg)" justifyItems="center" style={{ writingMode: "vertical-lr"}}>
                    Prezenční forma studia
                </Text>
            </Flex>
            <Table w="97%" minW="1150px">
                <Thead border="solid 2px" borderColor="primary.purple">
                    <Tr >
                        <Th w="40%" textAlign="center" bg="primary.purple" color="white" fontSize={{ base: "1.1rem", lg: "1.15rem" }}>
                            <Flex w="100%" justify="space-between">
                                <Text>Předměty:</Text>
                                <Text>Hodin týdně v ročníku</Text>
                            </Flex>
                        </Th>
                        <Th w="12%" textAlign="center" bg="primary.purple" color="white" fontSize={{ base: "1.1rem", lg: "1.15rem" }}>1.</Th>
                        <Th w="12%" textAlign="center" bg="primary.purple" color="white" fontSize={{ base: "1.1rem", lg: "1.15rem" }}>2.</Th>
                        <Th w="12%" textAlign="center" bg="primary.purple" color="white" fontSize={{ base: "1.1rem", lg: "1.15rem" }}>3.</Th>
                        <Th w="12%" textAlign="center" bg="primary.purple" color="white" fontSize={{ base: "1.1rem", lg: "1.15rem" }}>4.</Th>
                        <Th w="12%" textAlign="center" bg="primary.purple" color="white" fontSize={{ base: "1.1rem", lg: "1.15rem" }}>Celkem</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((row, index) => {
                        return (
                            <Tr border="solid 2px" borderColor="primary.purple" key={index}>
                                <Td border="solid 2px" borderColor="primary.purple">{row.subject}</Td>
                                {row.hours.map((hour, i) => (
                                    <Td border="solid 2px" borderColor="primary.purple" key={i} textAlign="center">{hour}</Td>
                                ))}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Flex>

    );
};

export default CustTable;
