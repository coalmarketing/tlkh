import { Box, Button, Collapse, Flex, IconButton, Image, Spacer, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import logo from '../../images/main_logo.svg';
import '../../fonts/fonts.css';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface ITab {
	name: string;
	hidden?: boolean;
	disabled?: boolean;
	target: string;
	offsetWide: 0;
	offsetMobile: 0;
	id: string;
	hash: string;
}

const TABS: ITab[] = [
	{
		name: 'Home',
		target: '/',
		hash: '#landing',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'landing',
		hidden: true,
	},
	{
		name: 'Pro studenty',
		target: '/pro-studenty',
		hash: '#studenti-landing',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'studenti-landing',
	},
	{
		name: 'Pro rodiče',
		target: '/pro-rodice',
		hash: '#rodice-landing',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'rodice-landing',
	},
	{
		name: 'Oblasti studia',
		target: '/',
		hash: '#oblasti-studia',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'oblasti-studia',
	},
	{
		name: 'Co nabízíme',
		target: '/',
		hash: '#o-studiu',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'o-studiu',
	},
	{
		name: 'Absolventi',
		target: '/',
		hash: '#absolventi',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'absolventi',
		hidden: true,
	},
	{
		name: 'FAQ',
		target: '/',
		hash: '#faq',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'faq',
	},
	{
		name: 'Software',
		target: '/pro-studenty',
		hash: '#software',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'software',
		hidden: true,
	},
	{
		name: 'Await',
		target: '/pro-studenty',
		hash: '#co-ocekavat',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'co-ocekavat',
		hidden: true,
	},
	{
		name: 'Timeline',
		target: '/pro-studenty',
		hash: '#odborne-bloky',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'odborne-bloky',
		hidden: true,
	},
	{
		name: 'Application',
		target: '/pro-studenty',
		hash: '#prihlaska',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'prihlaska',
		hidden: true,
	},
	{
		name: 'Aktivity',
		target: '/pro-studenty',
		hash: '#aktivity',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'aktivity',
		hidden: true,
	},

	//rodice
	{
		name: 'Budoucnost',
		target: '/pro-rodice',
		hash: '#budoucnost',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'budoucnost',
		hidden: true,
	},
	{
		name: 'Profese',
		target: '/pro-rodice',
		hash: '#profese',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'profese',
		hidden: true,
	},
	{
		name: 'Portfolio',
		target: '/pro-rodice',
		hash: '#portfolio',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'portfolio',
		hidden: true,
	},
	{
		name: 'Prihlaska',
		target: '/pro-rodice',
		hash: '#prihlaska',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'prihlaska',
		hidden: true,
	},
	{
		name: 'Organizace',
		target: '/pro-rodice',
		hash: '#organizace',
		offsetWide: 0,
		offsetMobile: 0,
		id: 'organizace',
		hidden: true,
	},
];

const MENU_WIDTH = '85vw';

const MainMenu = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [minimalizeMenu] = useMediaQuery('(max-width: 1182px)');
	const { isOpen, onToggle } = useDisclosure();

	useEffect(() => {
		if (location.hash === '#kontakt') {
			window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
			return;
		}

		const tab = TABS.find((t) => t.hash === location.hash);
		handleNavigation(tab);
	}, [location]);

	const scrollToWithOffset = (id: string, offset: number) => {
		const element = document.getElementById(id);
		if (element) {
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};

	const handleNavigation = (tab: ITab | undefined) => {
		if (!tab) return;
		const offset = minimalizeMenu ? tab.offsetMobile : tab.offsetWide || 0;

		/* Add some detail so scroll animation can be done */
		const scrollWithDelay = (delay: number = 200) => {
			setTimeout(() => {
				scrollToWithOffset(tab.id, offset);
			}, delay);
		};

		const handleScroll = () => {
			// we are on the correct page, just scroll to element
			if (location.pathname + location.hash === tab.target + tab.hash) {
				scrollToWithOffset(tab.id, offset);
				return;
			}

			navigate(tab.target + tab.hash);
			scrollWithDelay();
		};

		if (minimalizeMenu) {
			if (isOpen) {
				onToggle();
			}
			setTimeout(() => {
				handleScroll();
			}, 200); // Delay after menu is closed
		} else {
			handleScroll();
		}
	};

	return (
		<>
			<Flex justify="center" position="fixed" zIndex={100} w="100vw" top={0}>
				<Flex
					w={MENU_WIDTH}
					bg="rgba(255, 255, 255, 0.5)"
					backdropFilter="blur(2px)"
					h="85px"
					mt="30px"
					borderRadius={5}
					borderBottomRightRadius={isOpen ? 0 : 5}
					borderBottomLeftRadius={isOpen ? 0 : 5}
					py={4}
					px={6}
				>
					<Flex align="center" w="100%" justify="space-between">
						<Box cursor="pointer" as={Link} to="/#landing" w={{ base: '75%', lg: 'unset', '2xl': '25%' }}>
							<Image src={logo} maxW={{ base: "80%", md: "60%" }} />
						</Box>
						{!minimalizeMenu ? (
							<>
								<Flex flexGrow={1} justify="space-between">
									{TABS.filter((t) => !t.hidden).map((tab, i) => (
										<Box cursor="pointer" onClick={() => handleNavigation(tab)}>
											<Text
												key={i}
												fontSize={{ lg: '14px', xl: '16px', "2xl": "18px" }}
												cursor="pointer"
												_hover={{ color: 'primary.purple' }}
												fontWeight="bold"
											>
												{tab.name}
											</Text>
										</Box>
									))}
								</Flex>

								<Flex w={{ lg: '20%', '2xl': '25%' }} align="end" justify="end">
									<Button as={Link} to="/#kontakt" variant="solidPurple" borderRadius={5} w="100%" maxW="155px">
										Kontakt
									</Button>
								</Flex>
							</>
						) : (
							<>
								<Spacer />
								<IconButton
									onClick={onToggle}
									icon={isOpen ? <CloseIcon w="5" h="5" /> : <HamburgerIcon w="8" h="8" />}
									variant="ghost"
									aria-label="Toggle Navigation"
								/>
							</>
						)}
					</Flex>
				</Flex>
				<Collapse
					in={isOpen && minimalizeMenu}
					animateOpacity
					style={{
						borderBottomLeftRadius: '5px',
						borderBottomRightRadius: '5px',
						background: 'rgba(255, 255, 255, 0.5)',
						backdropFilter: 'blur(2px)',
						width: MENU_WIDTH,
						position: 'fixed',
						top: '115px',
						zIndex: 99,
					}}
				>
					<Flex p={3} direction="column" gap={3} align="center">
						{TABS.filter((t) => !t.hidden).map((tab, i) => (
							<Box w="100%" cursor="pointer" onClick={() => handleNavigation(tab)} py={3} textAlign="center">
								<Text key={i} _hover={{ color: 'primary.purple' }} fontWeight="bold">
									{tab.name}
								</Text>
							</Box>
						))}
						<Button
							as={Link}
							onClick={() => {
								onToggle(); // Close menu
								setTimeout(() => {
									navigate('/#kontakt'); // Navigate after a short delay
								}, 300); // Adjust the timeout as needed
							}}
							variant="solidPurple"
							borderRadius={5}
							w="100%"
						>
							Kontakt
						</Button>
					</Flex>
				</Collapse>
			</Flex>
		</>
	);
};

export default MainMenu;
