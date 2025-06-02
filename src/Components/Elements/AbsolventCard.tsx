import { Flex, Image, Text } from "@chakra-ui/react"

export interface IAbsolventCard {
    firstName: string;
    lastName: string;
    field: string;
    position: string;
    text: string;
    srcImage: string;
}

const AbsolventCard = ({ firstName, lastName, field, position, text, srcImage }: IAbsolventCard) => {
    return (
        <Flex w="100%" overflow="hidden" backdropFilter="blur(5px)" borderRadius={5} boxShadow="-5px 5px 10px 0px rgba(180, 177, 177, 0.35)" bg="rgba(96, 85, 85, 0.3)" minH="400px" p={5} position="relative" direction="column">
            <Flex direction="column">
                <Text fontSize="2.2rem">{firstName}</Text>
                <Text fontSize="2.2rem" fontWeight="bold">{lastName}</Text>
            </Flex>
            <Flex direction="column">
                <Text fontSize="1.5rem">{field}</Text>
                <Text fontSize="1.5rem">{position}</Text>
            </Flex>
            <Flex maxW="60%" zIndex={20}>
                <Text fontSize="1.2rem">
                    {text}
                </Text>
            </Flex>
            <Flex position="absolute" right={-5} bottom={0} zIndex={10}>
                <Image src={srcImage} />
            </Flex>
        </Flex>
    )
}

export default AbsolventCard;