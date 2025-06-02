import { Flex, Heading, Button, Box, Image } from '@chakra-ui/react';
import '../../fonts/fonts.css';
import ParentsPicture from '../../images/parents-landing.png';
import { Link } from 'react-router-dom';

const ParentsLanding = () => {
	return (
		<Flex direction="column" width="100%" bg="rgba(130, 84, 162, 0.8)" color="white" align="center" justify="end" height="100vh">
			<Flex w="85%" direction={{ base: 'column', md: 'row' }}>
				<Flex mt={{ base: "45%", md: "20%", xl: "unset" }} direction="column" gap={4} width={{ base: "100%", xl: "40%" }} justify="center" mb="5%">
					<Heading
						fontFamily="ChakraPetch"
						lineHeight={0.8}
						fontSize={{ sm: '8rem', md: '8.75rem', lg: '10.625rem', '2xl': '13.75rem', '3xl': '17.5rem' }}
						whiteSpace="nowrap"
						ml={{ sm: '-5px', md: '-10px' }}
					>
						<Box as="span" mr="-20px" >
							PRO
						</Box>{' '}

					</Heading>
					<Heading
						lineHeight={0.8}
						fontSize={{ sm: '3.5rem', md: '3.75rem', lg: '4.4rem', '2xl': '6.25rem' }}
						fontFamily="ChakraPetch"
					>
						RODIČE
					</Heading>
					<Flex mt="4%" gap={4} w={{ base: "100%", md: "85%", xl: "100%" }} direction={{ base: "column", md: "row" }}>
						<Button
							w="100%"
							h={{ base: '50px', xl: '60px' }}
							fontSize={{ base: '1.125rem', xl: '1.3125rem', '2xl': '1.625rem' }}
							variant="solidWhitePurple"
							as={Link}
							to="/pro-studenty/#co-ocekavat"
						>
							Co studenty čeká?
						</Button>
						<Button as={Link} to="/pro-studenty/#software" w="100%" h={{ base: '50px', xl: '60px' }} variant="borderWhitePurple" fontSize={{ base: '1.125rem', xl: '1.3125rem', '2xl': '1.625rem' }}>
							Software pro žáky
						</Button>
					</Flex>
				</Flex>
				<Flex align="end" alignSelf={{ base: "center", md: "end" }} h="100%" w={{ sm: "100%", md: "60%", xl: "60%" }} justify="end">
					<Image src={ParentsPicture} objectFit="contain" />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ParentsLanding;
