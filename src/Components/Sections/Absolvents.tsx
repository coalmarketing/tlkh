import { Button, Flex, Grid, Heading } from "@chakra-ui/react"
import AbsolventCard, { IAbsolventCard } from "../Elements/AbsolventCard";
import absolventPlaceholder from "../../images/absolvent-placeholder.png";
import { Link } from "react-router-dom";


const ABSOLVENTS: IAbsolventCard[] = [
    {
        firstName: "Jméno",
        lastName: "Příjmení",
        field: "Obor/Firma",
        position: "Pozice",
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor aliquet commodo. Cras sodales, velit a eleifend molestie ex id elit porta, in pretium ligula ornare.”",
        srcImage: absolventPlaceholder,
    },
    {
        firstName: "Jméno",
        lastName: "Příjmení",
        field: "Obor/Firma",
        position: "Pozice",
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor aliquet commodo. Cras sodales, velit a eleifend molestie ex id elit porta, in pretium ligula ornare.”",
        srcImage: absolventPlaceholder,
    },
    {
        firstName: "Jméno",
        lastName: "Příjmení",
        field: "Obor/Firma",
        position: "Pozice",
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor aliquet commodo. Cras sodales, velit a eleifend molestie ex id elit porta, in pretium ligula ornare.”",
        srcImage: absolventPlaceholder,
    },
    {
        firstName: "Jméno",
        lastName: "Příjmení",
        field: "Obor/Firma",
        position: "Pozice",
        text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor aliquet commodo. Cras sodales, velit a eleifend molestie ex id elit porta, in pretium ligula ornare.”",
        srcImage: absolventPlaceholder,
    },
]

const Absolvents = () => {
    return (
        <Flex minH="100vh" py={{ base: "10%", lg: "unset" }} w="100%" position="relative" justify="center" background="linear-gradient(to bottom left, rgba(255, 255, 255, 1) 20%, rgba(130, 84, 162, 0.75) 90%)">
            <Flex w="85%" justifySelf="end" pt="4%" direction={{ base: "column-reverse", lg: "row" }}>
                <Flex direction="column" gap={4} align="end" pb="4%" w="100%">
                    <Flex direction="column" w={{ base: "100%", xl: "50%" }} textAlign={{ base: "start", md: "end" }} zIndex={30}>
                        <Heading fontFamily="ChakraPetch" fontSize={{ base: "3.3rem", lg: "5rem", xl: "5rem" }}>
                            NAŠI ABSOLVENTI
                        </Heading>
                        <Heading fontFamily="Mundial" fontWeight="normal" fontSize={{ base: "1.3rem", lg: "1.55rem"}}>
                            Zajímá tě, co o nás říkají naši absolventi? Níže se dozvíš hlavní benefity, které ti TLHK může nabídnout. Tak co, jdeš do toho?
                        </Heading>
                    </Flex>
                    <Grid mt="3%" w={{ base: "100%", lg: "50%", xl: "100%" }} templateColumns={{ base: '1fr', xl: 'repeat(4, 1fr)' }} gap={{ base: 9 }}>
                        {ABSOLVENTS.map((card, i) => (
                            <AbsolventCard key={i} firstName={card.firstName} lastName={card.lastName} field={card.field} position={card.position} text={card.text} srcImage={card.srcImage} />
                        ))}
                        <Flex display={{ base: "none", xl: "flex" }} />
                        <Flex display={{ base: "none", xl: "flex" }} />
                        <Flex display={{ base: "none", xl: "flex" }} />
                        <Button as={Link} to="/pro-studenty#studenti-landing" variant="solidPurple" height='50px'>Staň se jedním z nás!</Button>
                    </Grid>
                </Flex>
            </Flex>
        </Flex>
    )
}


export default Absolvents;


