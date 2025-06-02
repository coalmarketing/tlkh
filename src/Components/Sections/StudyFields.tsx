import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { IoMdClose } from "react-icons/io";
import swIcon from '../../images/icons/studyFields/sw.svg';
import designIcon from '../../images/icons/studyFields/design.svg';
import marketingIcon from '../../images/icons/studyFields/marketing.svg';
import networkIcon from '../../images/icons/studyFields/networking.svg';
import hwIcon from '../../images/icons/studyFields/hw.svg';
import automatizationIcon from '../../images/icons/studyFields/automatization.svg';
import electroIcon from '../../images/icons/studyFields/electro.svg';
import iotIcon from '../../images/icons/studyFields/iot.svg';
import robotIcon from '../../images/icons/studyFields/robots.svg';
import aiIcon from '../../images/icons/studyFields/ai.svg';
import securityIcon from '../../images/icons/studyFields/security.svg';
import printIcon from '../../images/icons/studyFields/print.svg';
import nanoIcon from '../../images/icons/studyFields/nano.svg';
import industryAuto from '../../images/icons/studyFields/autoindustry.svg';
import prototypeIcon from '../../images/icons/studyFields/prototype.svg';
import analyzeIcon from '../../images/icons/studyFields/analyze.svg';
import mediaIcon from '../../images/icons/studyFields/media.svg';
import vrIcon from '../../images/icons/studyFields/vr.svg';
import mesureIcon from '../../images/icons/studyFields/mesures.svg';
import resourcesIcon from '../../images/icons/studyFields/resources.svg';
import wirelessIcon from '../../images/icons/studyFields/wireless.svg';
import industryDesignIcon from '../../images/icons/studyFields/industrydesign.svg';
import metroIcon from '../../images/icons/studyFields/metro.svg';
import cncProgramIcon from '../../images/icons/studyFields/cncProgramming.svg';
import cadIcon from '../../images/icons/studyFields/cad.svg';
import mechaIcon from '../../images/icons/studyFields/mecha.svg';

import Circle from '../Elements/Circle';
import { useMemo, useState } from 'react';

enum ECardType {
	information = 'Information',
	industry = 'Industry',
	electro = 'Electro',
}

const TOPICS = [
	{ label: 'Vývoj software', icon: swIcon, keys: [ ECardType.information ] },
	{ label: 'Prům. automatizace', icon: automatizationIcon, keys: [ ECardType.electro ] },
	{ label: '3D tisk', icon: printIcon, keys: [ ECardType.industry ] },
	{ label: 'Hardware', icon: hwIcon, keys: [ ECardType.electro, ECardType.information ] },
	{ label: 'Analýza dat', icon: analyzeIcon, key: ECardType.information },
	{ label: 'Design pro výrobu', icon: industryDesignIcon, keys: [ ECardType.electro ] },
	{ label: 'Grafický design', icon: designIcon, keys: [ ECardType.information ] },
	{ label: 'Elektromobilita', icon: electroIcon, keys: [ ECardType.electro ] },
	{ label: 'Nanotechnologie', icon: nanoIcon, keys: [ ECardType.electro ] },
	{ label: 'Digitální média', icon: mediaIcon, keys: [ ECardType.information ] },
	{ label: 'Metrologie', icon: metroIcon, keys: [ ECardType.industry ] },
	{ label: 'Digitální marketing', icon: marketingIcon, keys: [ ECardType.information ] },
	{ label: 'Internet of Things (IOT)', icon: iotIcon, keys: [ ECardType.information, ECardType.electro ] },
	{ label: 'CNC programování', icon: cncProgramIcon, keys: [ ECardType.industry ] },
	{ label: 'VR & AR', icon: vrIcon, keys: [ ECardType.information, ECardType.industry ] },
	{ label: 'Mechatronika', icon: mechaIcon, keys: [ ECardType.industry ] },
	{ label: 'Networking', icon: networkIcon, keys: [ ECardType.information ] },
	{ label: 'Měření a regulace', icon: mesureIcon, keys: [ ECardType.electro ] },
	{ label: 'Robotické systémy', icon: robotIcon, keys: [ ECardType.electro, ECardType.industry ] },
	{ label: 'Automatizace výroby', icon: industryAuto, keys: [ ECardType.electro, ECardType.industry ] },
	{ label: 'Obnovitelné zdroje', icon: resourcesIcon, keys: [ ECardType.electro ] },
	{ label: 'CAD modelování', icon: cadIcon, keys: [ ECardType.industry ] },
	{ label: 'Kyberbezpečnost', icon: securityIcon, keys: [ ECardType.information ] },
	{ label: 'Umělá inteligence', icon: aiIcon, keys: [ ECardType.information ] },
	{ label: 'Prototyping', icon: prototypeIcon, keys: [ ECardType.electro, ECardType.industry ] },
	{ label: 'Bezdrátová konektivita', icon: wirelessIcon, keys: [ ECardType.electro, ECardType.information ] },
];

const StudyFields = () => {
	const [selected, setSelected] = useState<Record<ECardType, boolean>>({
		[ECardType.information]: false,
		[ECardType.industry]: false,
		[ECardType.electro]: false,
	});

	const handleSelection = (key: ECardType): void => {
		setSelected((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const filteredTopics = useMemo(() => {
		if (Object.values(selected).every(value => !value)) {
			return TOPICS;
		} 
		
		// Filter topics that have at least one of the selected categories
		return TOPICS.filter(topic => 
			Array.isArray(topic.keys) && topic.keys.some(key => selected[key])
		);
	}, [selected]);

	return (
		<Flex minH="100vh" py={{ base: "15%", lg: "5%"}} w="100%" justify="center" bg="#F5A455" position="relative">
			<Flex w="85%" direction="column" gap={9} zIndex={30}>
				<Flex direction="column" maxW={{ base: '100%', lg: '65%' }}>
					<Heading fontFamily="ChakraPetch" color="white" fontWeight="bold" fontSize={{ base: '3.1rem', lg: '5rem', xl: '5rem' }}>
						OBLASTI STUDIA TLHK
					</Heading>
					<Text fontSize={{ base: "1.3rem", lg: "1.55rem"}} color="white">
						U nás máš možnost zdokolanit své znalosti v mnoha směrech. Mezi hlavní obory studia patří:
					</Text>
				</Flex>
				<Flex pl={{ base: "unset", xl: "2%"}} gap={4} direction={{base: "column", md: "row"}}>
					<Flex gap={2}>
						<Box
							cursor="pointer"
							onClick={() => handleSelection(ECardType.information)}
							border="2px solid white"
							borderRadius={15}
							color={selected.Information ? '#F5A455' : 'white'}
							px={5}
							py={0}
							bg={!selected.Information ? '#F5A455' : 'white'}
						>
							<Text fontSize={{ base: "1.2rem", lg: "1.4rem"}}>INFORMATIKA</Text>
						</Box>
						{selected.Information && (
							<Flex
								border="1px solid white"
								borderRadius="full"
								w="40px"
								justify="center"
								align="center"
								color="#F5A455"
								bg="white"
								cursor="pointer"
								onClick={() => handleSelection(ECardType.information)}
							>
								<IoMdClose size="25px"/>
							</Flex>
						)}
					</Flex>
					<Flex gap={2}>
						<Box
							cursor="pointer"
							onClick={() => handleSelection(ECardType.industry)}
							border="2px solid white"
							borderRadius={15}
							color={selected.Industry ? '#F5A455' : 'white'}
							px={5}
							py={0}
							bg={!selected.Industry ? '#F5A455' : 'white'}
						>
							<Text fontSize={{ base: "1.2rem", lg: "1.4rem"}}>STROJÍRENSTVÍ</Text>
						</Box>
						{selected.Industry && (
							<Flex
								border="1px solid white"
								borderRadius="full"
								w="40px"
								justify="center"
								align="center"
								color="#F5A455"
								bg="white"
								cursor="pointer"
								onClick={() => handleSelection(ECardType.industry)}
							>
								<IoMdClose size="25px"/>
							</Flex>
						)}
					</Flex>
					<Flex gap={2}>
						<Box
							cursor="pointer"
							onClick={() => handleSelection(ECardType.electro)}
							border="2px solid white"
							borderRadius={15}
							color={selected.Electro ? '#F5A455' : 'white'}
							px={5}
							py={0}
							bg={!selected.Electro ? '#F5A455' : 'white'}
						>
							<Text fontSize={{ base: "1.2rem", lg: "1.4rem"}}>ELEKTROTECHNIKA</Text>
						</Box>
						{selected.Electro && (
							<Flex
								border="1px solid white"
								borderRadius="full"
								w="40px"
								justify="center"
								align="center"
								color="#F5A455"
								bg="white"
								cursor="pointer"
								onClick={() => handleSelection(ECardType.electro)}
							>
								<IoMdClose size="25px"/>
							</Flex>
						)}
					</Flex>
				</Flex>

				<Flex pl={{ base: "unset", xl: "2%"}}>
					<SimpleGrid columns={[1, 1, 2, 5]} spacing={6} w="100%">
						{filteredTopics.map((topic, index) => (
							<Flex
								key={index}
								backdropFilter="blur(10px)"
								borderRadius="md"
								bg="rgba(0,0,0, 0.1)"
								p={4}
								align="center"
								gap={4}
								h="65px"
								color="white"
								position="relative"
								overflow="hidden"
							>
								<Circle
									source={topic.icon}
									styles={{
										color: 'white',
										w: '100px',
										h: 'auto',
										aspectRatio: 1,
										top: 0,
										right: 0,
										transform: 'translate(25%, -25%)',
									}}
								/>
								<Text fontSize={{ base: "1.2rem", lg: "1.2rem", xl: "1.4rem"}}>{topic.label}</Text>
							</Flex>
						))}
					</SimpleGrid>
				</Flex>
			</Flex>
			{/* <Flex position="absolute" right={-40} zIndex={20}>
				<Image src={codeImg}/>
			</Flex> */}
		</Flex>
	);
};

export default StudyFields;
