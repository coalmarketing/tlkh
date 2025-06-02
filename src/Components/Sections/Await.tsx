import { Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import '../../fonts/fonts.css';
import offerImg from "../../images/coNabizime-white.svg";
import ValueCard from '../Elements/ValueCard';

import scheduleIcon from "../../images/icons/await/rozvrh.svg";
import softwareIcon from "../../images/icons/await/software.svg";
import studyIcon from "../../images/icons/await/staz.svg";
import { Link } from 'react-router-dom';

export interface IParentInterest {
    heading: string;
    text: string;
    img: string;
}

const CARDS = [
    {
        heading: "01_FLEXIBILNÍ ROZVRH",
        text: "lorem ipsum dolor sit amet",
        img: scheduleIcon,
        linkTo: "/pro-rodice#organizace",

    },
    {
        heading: "02_SOFTWARE",
        text: "lorem ipsum dolor sit amet",
        img: softwareIcon,
        linkTo: "/pro-studenty#software",
    },
    {
        heading: "03_ODBORNÉ SOUTĚŽE A STÁŽE",
        text: "lorem ipsum dolor sit amet",
        img: studyIcon,
        linkTo: "/pro-studenty#odborne-bloky",
    }
]

const Await = () => {
    return (
        <Flex minH="100vh" pt={{ base: "10%", lg: "unset"}} w="100%" position="relative" justify="center" background="linear-gradient(to bottom left, rgba(255, 255, 255, 1) 35%, rgba(62, 166, 222, 0.75) 80%)">
            <Flex w="85%" justifySelf="end" pt="4%" direction={{ base: "column-reverse", lg: "row" }}>
                <Image src={offerImg} maxH={{ base: "100%", lg: "90%" }} objectFit={{ base: "contain", lg: "unset" }} position={{ base: "relative", lg: "absolute" }} left={0} bottom={0} zIndex={0} />
                <Flex direction="column" gap={4} align="end" pb="4%">
                    <Flex direction="column" w={{ base: "100%", xl: "50%" }} gap={2} textAlign={{ base: "start", md: "end" }} zIndex={30}>
                        <Heading fontFamily="ChakraPetch" fontSize={{ base: "3.1rem", lg: "5rem", xl: "5rem"}}>
                            CO TĚ U NÁS ČEKÁ?
                        </Heading>
                        <Heading fontFamily="Mundial" fontWeight="bold"  fontSize={{ base: "1.3rem", lg: "1.55rem"}}>
                            Technické lyceum ti dá široký pohled a možnost rozhodnout se,
                        </Heading>
                        <Heading fontFamily="Mundial" fontWeight="bold" color="primary.blue" fontSize={{ base: "1.3rem", lg: "1.55rem"}}>
                            co chceš dělat po střední škole
                        </Heading>
                    </Flex>
                    <Flex w={{ base: "100%", lg: "50%" }} textAlign={{ base: "start", md: "end" }} direction="column"  zIndex={30}>
                        <Text fontSize={{ base: "1.3rem", lg: "1.55rem"}}>
                            Na Technickém lyceu získáš přípravu na technickou vysokou školu a naučíme tě, jak propojit teorii s praxí - nejen, že věcí pochopíš, ale budeš schopný je využít i v reálném životě. Zkušenosti s projekty a týmovou prací se ti bude hodit nejen na vysoké škole, ale i v budoucí práci.
                        </Text>
                    </Flex>
                    <Flex w={{ base: "100%", lg: "50%" }} textAlign={{ base: "start", md: "end" }} direction="column" >
                        <Text fontSize={{ base: "1.3rem", lg: "1.55rem"}}>
                           Co nabízíme dál?
                        </Text>
                    </Flex>
                    <Grid mt="3%" w={{ base: "100%", lg: "50%", xl: "100%" }} templateColumns={{ base: '1fr', xl: 'repeat(3, 1fr)' }} gap={{ base: 3 }}>
                        {CARDS.map((card, i) => (
                            <ValueCard linkTo={card.linkTo} key={i} color="rgba(96, 85, 85, 0.3)" position={{ bottom: 0, right: 0 }} transform="translate(25%, 25%)" heading={card.heading} headingFontSize='1.6rem' text={card.text} img={card.img} />
                        ))}
                        <Flex />
                        <Flex />
                        <Button variant="solidWhiteBlue" height='50px' as={Link} to="/pro-studenty/#prihlaska">Přihlášky ke studiu</Button>
                        { /** <Button variant="borderWhiteBlue" height='50px'>Sestavit si rozvrh</Button>*/}
                    </Grid>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Await;