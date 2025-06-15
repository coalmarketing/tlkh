import { Grid, GridItem, Heading, Text, Box, Flex, Link } from "@chakra-ui/react";
import backgroundImg from "../../images/logo-back-footer.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { HiBuildingLibrary } from "react-icons/hi2";
import { IoMdHeart } from "react-icons/io";

interface IProps {
    color?: string;
}

const Footer = ({ color }: IProps) => {
    return (
        <Box
            minH="20vh"
            w="100%"
            bg={color}
            backgroundImage={backgroundImg}
            backgroundSize="100%"
            backgroundPosition="0% 80%"
            backgroundRepeat="no-repeat"
            color="white"
        >
            <Flex p="3%">
                <Grid
                    w="90%"
                    mx="auto"
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={8}
                    mt={{ base: "2%", xl: "0%" }}
                >
                    {/* Kontakt Section */}
                    <GridItem>
                        <Heading fontSize={{ base: "2.2rem", xl: "3rem" }}>KONTAKTY</Heading>
                        <Box fontSize={{ base: "1rem", xl: "1.2rem" }} mt={4}>
                            <Box display="flex" alignItems="center" gap={3}>
                                <Flex bg="white" boxSize="35px" justify="center" align="center">
                                    <FaPhoneAlt color={color} />
                                </Flex>
                                <Text>+420 495 513 391-2, +420 495 511 518</Text>
                            </Box>
                            <Box display="flex" alignItems="center" gap={3} mt={3}>
                                <Flex bg="white" boxSize="35px" justify="center" align="center">
                                    <IoIosMail color={color} size="25px" />
                                </Flex>
                                <Text>hradebni@hradebni.cz</Text>
                            </Box>
                            <Box display="flex" alignItems="center" gap={3} mt={3}>
                                <Flex bg="white" boxSize="35px" justify="center" align="center">
                                    <FaGlobe color={color} size="22px" />
                                </Flex>
                                <Text>www.tlhk.cz</Text>
                            </Box>
                            <Box display="flex" alignItems="start" gap={3} mt={5}>
                                <Flex bg="white" boxSize="35px" justify="center" align="center">
                                    <HiBuildingLibrary color={color} size="25px" />
                                </Flex>
                                <Box>
                                    <Text>SPŠ, SOŠ a SOU, Hradec Králové</Text>
                                    <Text>Hudební 1029/2</Text>
                                    <Text>500 03 Hradec Králové</Text>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>

                    {/* Odkazy Section */}
                    <GridItem justifyItems={{ base: "unset", xl: "center" }}>
                        <Heading fontSize={{ base: "2.2rem", xl: "3rem" }}>&#8202;</Heading>
                        <Box fontSize={{ base: "1rem", xl: "1.2rem" }} mt={4}>
                            <Box display="flex" alignItems="center" gap={3}>
                                <Text fontWeight="bold">IČO:</Text>
                                <Text>15062848</Text>
                            </Box>
                            <Box display="flex" alignItems="center" gap={3}>
                                <Text fontWeight="bold">DIČ:</Text>
                                <Text>CZ15062848</Text>
                            </Box>
                            <Box display="flex" alignItems="center" gap={3}>
                                <Text fontWeight="bold">REDIZO:</Text>
                                <Text>600 011 828</Text>
                            </Box>
                            <Box display="flex" alignItems="center" gap={3}>
                                <Text fontWeight="bold">IZO:</Text>
                                <Text>015 062 848</Text>
                            </Box>
                            <Box display="flex" alignItems="center" gap={3}>
                                <Text fontWeight="bold">Číslo účtu školy:</Text>
                                <Text>29034511/0100</Text>
                            </Box>
                            <Box display="flex" alignItems="center" gap={3}>
                                <Text fontWeight="bold">Číslo účtu jídelny:</Text>
                                <Text>43-7242610217/0100</Text>
                            </Box>
                        </Box>
                    </GridItem>

                    {/* We Cookin... Section */}
                    <GridItem justifyItems={{ base: "unset", xl: "end" }}>
                        <Heading fontSize={{ base: "2.2rem", xl: "3rem" }}>ODKAZY</Heading>
                        <Flex textDecor="underline" direction="column" textAlign={{ base: "unset", xl: "end" }} fontSize={{ base: "1rem", xl: "1.2rem" }} mt={4}>
                            <Text as={Link} href="https://www.hradebni.cz/prijimaci-rizeni" target="_blank">Aktuální informace k přijímacím zkouškám</Text>
                            <Text as={Link} href="https://dipsy.gov.cz/prihlaska/intro" target="_blank">Přihlášky na střední školy</Text>
                            <Text as={Link} href="https://www.hradebni.cz/studijni-maturitni-obory" target="_blank">Maturita - co a jak</Text>
                            <Text as={Link} href="https://www.hradebni.cz/" target="_blank">Web školy</Text>
                            <Text as={Link} href="https://bakalari2.hradebni.cz/login" target="_blank">Bakaláři - přístup pro studenty a rodiče</Text>
                            <Text as={Link} href="https://www.hradebni.cz/file.php?nid=18237&oid=12258556" target="_blank">Podmínky druhého kola přímacího řízení</Text>
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
            <Flex w="100%" bg="white" p="5px" justify="center" align="center" color="black" gap={1}>
                <Text>Developed with</Text> <IoMdHeart color="red" /> <Text>by Coalfamily | © 2025</Text>
            </Flex>
        </Box>
    );

};

export default Footer;
