import { Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import '../../fonts/fonts.css';
import offerImg from "../../images/coNabizime.png";
import ValueCard from '../Elements/ValueCard';

import certImg from '../../images/icons/offer/cert.svg';
import soutezImg from '../../images/icons/offer/soutez.svg';
import stazImg from '../../images/icons/offer/staz.svg';
import { Link } from 'react-router-dom';

export interface IParentInterest {
    heading: string;
    text: string;
    img: string;
}

const CARDS = [
    {
        heading: "01_ODBORNÉ SOUTĚŽE",
        text: "lorem ipsum dolor sit amet",
        img: soutezImg,
    },
    {
        heading: "02_CERTIFIKÁTY",
        text: "lorem ipsum dolor sit amet",
        img: certImg,
    },
    {
        heading: "03_ODBORNÉ STÁŽE",
        text: "lorem ipsum dolor sit amet",
        img: stazImg,
    }
]

const Offer = () => {
    return (
        <Flex minH="100vh"  pt={{ base: "10%", lg: "unset"}} w="100%" position="relative" justify="center" background="linear-gradient(to bottom left, rgba(255, 255, 255, 1) 35%, rgba(247, 143, 49, 0.75) 80%)">
            <Flex w="85%" justifySelf="end" pt="4%" direction={{ base: "column-reverse", lg: "row" }}>
                <Image src={offerImg} maxH={{ base: "100%", lg: "90%" }} objectFit={{ base: "contain", lg: "unset" }} position={{ base: "relative", lg: "absolute" }} left={0} bottom={0} zIndex={0} />
                <Flex direction="column" gap={4} align="end" pb="4%">
                    <Flex direction="column" w={{ base: "100%", xl: "50%" }} textAlign={{ base: "start", md: "end" }} zIndex={30}>
                        <Heading fontFamily="ChakraPetch" fontSize={{ base: "3.1rem", lg: "5rem", xl: "5rem"}}>
                            O STUDIU
                        </Heading>
                        <Heading fontFamily="Mundial" fontWeight="bold" fontSize={{ base: "1.3rem", lg: "1.55rem"}}>
                            Technické Lyceum je plné možností seberozvoje a dalšího vzdělání
                        </Heading>
                        <Heading fontFamily="Mundial" fontWeight="bold" color="primary.orange" fontSize={{ base: "1.3rem", lg: "1.55rem"}}>
                            v tom, co tě doopravdy baví.
                        </Heading>
                    </Flex>
                    <Flex w={{ base: "100%", lg: "50%" }} textAlign={{ base: "start", md: "end" }} direction="column" zIndex={30}>
                        <Text fontSize={{ base: "1.3rem", lg: "1.55rem"}}>
                            Odborné soutěže nejsou jen o výhrách - jsou hlavně o získávání zkušeností, objevování nových možností a rozvíjení sebe sama. I malý krok v soutěži může být velkým krokem pro tvou budoucnost. A hlavně, je to skvělý způsob, jak zjistit, co tě opravdu baví!
                        </Text>
                    </Flex>
                    <Flex w={{ base: "100%", lg: "50%" }} textAlign={{ base: "start", md: "end" }} direction="column" >
                        <Text fontSize={{ base: "1.3rem", lg: "1.55rem"}}>
                            Další možností splnění odborného bloku jsou také odborné stáže ve firmách na na vysokých školách.
                        </Text>
                    </Flex>
                    <Grid mt="3%" w={{ base: "100%", lg: "50%", xl: "100%" }} templateColumns={{ base: '1fr', xl: 'repeat(3, 1fr)' }} gap={{ base: 3 }}>
                        {CARDS.map((card, i) => (
                            <ValueCard key={i} color="rgba(96, 85, 85, 0.3)" position={{ top: 0, right: 0 }} transform="translate(25%, 25%)" heading={card.heading} headingFontSize='1.6rem' text={card.text} img={card.img} linkTo="/pro-studenty#odborne-bloky"/>
                        ))}
                        <Flex />
                        <Button as={Link} to="/pro-studenty#odborne-bloky" variant="borderWhiteOrange" height='50px'>Výhody stáží a certifikátů</Button>
                        <Button as={Link} to="/pro-studenty#studenti-landing" variant="solidWhiteOrange" height='50px'>Chci vědět víc!</Button>
                    </Grid>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Offer;




// {CARDS.map((card, i) => (
//     <ParentInterest key={i} heading={card.heading} text={card.text} img={card.img} />
// ))}