import { Flex, Heading, Text, ListItem, UnorderedList, Image } from '@chakra-ui/react';
import '../../fonts/fonts.css';
import oneIcon from '../../images/icons/timeline/01.svg';
import twoIcon from '../../images/icons/timeline/02.svg';
import threeIcon from '../../images/icons/timeline/03.svg';
import fourIcon from '../../images/icons/timeline/04.svg';
import futureIcon from '../../images/icons/timeline/future.svg';
import documentIcon from '../../images/icons/timeline/document.svg';
import graphIcon from '../../images/icons/timeline/graph.svg';
import romanHouseIcon from '../../images/icons/timeline/romanHouse.svg';

const Timeline = () => {
	return (
		<Flex py={{ base: "10%", lg: "5%" }} direction="column" width="100%" align="center" >

			<Flex w="85%" minH="100vh" direction="column" gap={{ base: "70px", lg: "120px" }}>
				<Heading fontFamily="ChakraPetch" color="secondary.blue" fontWeight="bold" fontSize={{ base: "3.2rem", lg: "5rem", xl: "5rem" }}>
					ODBORNÉ BLOKY
				</Heading>
				<Flex gap={16} >
					<Flex maxW={{ base: "100%", lg: "70%" }} gap={6} position="relative" direction="column">
						<Heading fontFamily="ChakraPetch" fontSize={{ base: "3rem", md: "3.4rem", lg: "4rem", xl: "4.8rem" }}>SMĚR TVÉ PROFESNÍ CESTY</Heading>
						<Text fontSize={{ base: "1.3rem", lg: "1.55rem" }}>
							V rámci odborných bloků si sám/sama zvolíš jakým směrem se vydáš dál. Zajímá tě IT, elektrotechnika nebo strojírenství? Tyto obory jsou otevřené všem - dívkám i chlapcům. V odborných blocích si prohloubíš znalosti přesně v té oblasti, která tě láká. A pokud sisám/sama neporadíš, pomůžeme ti - na této cestě nejsi nikdy sám/sama. Spojuj teorii s praxí v projektech, kde uplatníš svůj talent. Tvoje cesta, tvoje volba.
						</Text>
						<Image src={oneIcon} position="absolute" maxH="250px" top="40px" zIndex={-1} />
					</Flex>
					<Flex w={{ base: 0, lg: "55%" }} align="center" justify="center" display={{ base: "none", lg: "flex" }}>
						<Image maxH={{ base: "0", lg: "300px" }} src={romanHouseIcon} />
					</Flex>
				</Flex>

				{/* SOFTWARE */}
				<Flex align="end" position="relative">
					<Flex position="absolute" zIndex={10} align="center" justify="center" alignSelf="center" display={{ base: "none", lg: "flex" }}>
						<Image maxH={{ base: "0", lg: "300px" }} src={graphIcon} />
					</Flex>
					<Flex w="100%" direction="column" zIndex={20} gap={6} position="relative">
						<Flex direction="column" w={{ base: "100%", md: "85%" }} alignSelf="end">
							<Heading textAlign={{ base: "start", md: "end" }} fontFamily="ChakraPetch" alignSelf={{ base: "start", lg: "end" }} fontSize={{ base: "3rem", md: "3.4rem", lg: "4rem", xl: "4.8rem" }}>
								BUDOVÁNÍ ODBORNÉHO PORTFOLIA
							</Heading>
							<Text fontSize={{ base: "1.3rem", lg: "1.55rem" }} w={{ base: "100%", lg: "90%", xl: "80%" }} alignSelf="end" textAlign={{ base: "start", md: "end" }}>
								Studenti v rámci odborného bloku budou vytvářet vlastní portfolio, které dokumentuje jejich profesní rozvoj v oblasti informačních technologií, strojírenství nebo elektrotechniky. Toto portfolio bude odrážet:
							</Text>
						</Flex>
						<Flex gap="10%" w="100%" alignSelf="end" direction={{ base: "column", xl: "row" }}>
							<UnorderedList fontSize={{ base: "1.1rem", lg: "1.35rem" }} w={{ base: "100%", xl: "50%" }} spacing={1}>
								<ListItem>Dosažené certifikace z průmyslových standardů a technologií</ListItem>
								<ListItem>Záznamy o účasti na workshopech či konferencích</ListItem>
								<ListItem>Mentorování mladších studentů nebo vedení workshopů</ListItem>
								<ListItem>Dobrovolnické aktivity související s oborem</ListItem>
								<ListItem>Inovativní nápady a koncepty, které student vyvíjel ve svém volném čase</ListItem>
							</UnorderedList>
							<UnorderedList fontSize={{ base: "1.1rem", lg: "1.35rem" }} w={{ base: "100%", xl: "50%" }} spacing={1} >
								<ListItem>Vlastní projekty (individuální i skupinové)</ListItem>
								<ListItem>Osobní výzkumné aktivity a experimenty</ListItem>
								<ListItem>Absolvované kurzy samostudia a online vzdělávací programy</ListItem>
								<ListItem>Návštěvy odborných veletrhů a exkurzí v technologických firmách</ListItem>
								<ListItem>Úspěchy v odborných soutěžích na regionální i celostátní úrovni</ListItem>
								<ListItem>Praktické zkušenosti získané během odborných stáží ve spolupracují</ListItem>
							</UnorderedList>
						</Flex>
						<Text fontSize={{ base: "1.3rem", lg: "1.55rem" }} w={{ base: " 100%", lg: "80%", xl: "70%", '2xl': "60%" }} alignSelf="end" textAlign={{ base: "start", md: "end" }}>
							Studenti mají možnost pracovat na projektech samostatně, ve skupinách s ostatními, což rozvíjí jejich scohopnost řešit problémy různými způsoby.
						</Text>
						<Image src={twoIcon} position="absolute" maxH="250px" top="40px" right={0} zIndex={-1} />
					</Flex>
				</Flex>

				{/* SOFTWARE */}
				<Flex >
					<Flex maxW={{ base: "100%", lg: "70%" }} direction="column" gap={6} position="relative">
						<Heading fontFamily="ChakraPetch" fontSize={{ base: "3rem", md: "3.4rem", lg: "4rem", xl: "4.8rem" }}>ZÁVĚREČNÁ PRÁCE</Heading>
						<Flex direction="column" w={{ base: "100%", lg: "90%", xl: "70%" }} gap={6}>
							<Text fontSize={{ base: "1.3rem", lg: "1.55rem" }}>
								V rámci odborného bloku budou studenti realizovat závěrečný výstup, kde budou prezentovat své dosažené úspěchy a nabyté zkušenosti. Tato prezentace bude sloužit jako komplexní shrnutí studentova odborného růstu, kde představí:
							</Text>
							<Flex>
								<UnorderedList fontSize={{ base: "1.1rem", lg: "1.35rem" }} px="1%">
									<ListItem>Klíčové projekty, na kterých pracoval</ListItem>
									<ListItem>Získané certifikace</ListItem>
									<ListItem>Dovednosti osvojené během stáží</ListItem>
									<ListItem>Reflexi odborných aktivit</ListItem>
								</UnorderedList>
							</Flex>
							<Text fontSize={{ base: "1.3rem", lg: "1.55rem" }}>
								Tento výstup nejen prověří studentovu schopnost odborně komunikovat a obhájit svou práci před publikem, ale zároveň poskytne cennou zpětnou vazbu od pedagogů i od odborné veřejnosti, kteří se prezentace mohou účastnit.
							</Text>
						</Flex>
						<Image src={threeIcon} position="absolute" maxH="250px" top="40px" zIndex={-1} />
					</Flex>
					<Flex w={{ base: "0%", lg: "35%" }} align="center" justify="center" display={{ base: "none", lg: "flex" }}>
						<Image maxH={{ base: "0", lg: "300px" }} src={documentIcon} />
					</Flex>
				</Flex>


				{/* FUTURE */}
				<Flex align="end" >
					<Flex w={{ base: 0, lg: "85%" }} align="center" justify="center" alignSelf="center" display={{ base: "none", lg: "flex" }}>
						<Image  maxH={{ base: "0", lg: "300px" }} src={futureIcon} />
					</Flex>
					<Flex maxW={{ base: "100%", xl: "85%",  '2xl': "60%" }} direction="column" gap={6} position="relative">
						<Heading fontFamily="ChakraPetch" w={{ base: "100%", md: "95%", xl: "70%"}} textAlign={{ base: "start", md: "end" }} alignSelf="end" fontSize={{ base: "2.9rem", md: "3.4rem", lg: "4rem", xl: "4.8rem" }}>
							VÝHODY PRO BUDOUCNOST
						</Heading>

						<Text fontSize={{ base: "1.3rem", lg: "1.55rem" }} textAlign={{ base: "start", md: "end" }} w={{  base: "100%", lg: "80%"}} alignSelf="end">
							Tímto způsobem si student vytvoří komplexní přehled svých odborných kompetencí, který poslouží nejen jako důkaz získaných dovedností během studia, ale také jako cenný materiál při přijímacím řízení na vysokou školu a při budoucím uplatnění na pracovním trhu.
						</Text>

						<Image src={fourIcon} position="absolute" maxH="250px" top="40px" right={0} zIndex={-1} />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Timeline;
