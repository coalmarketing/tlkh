import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import CustomAccordion from '../Elements/CustomAccordion';
import { Link } from 'react-router-dom';

const FIRST_ACC_DATA = [
	{
		question: 'Co když nevím, čím se v odborném bloku zabývat?',
		answer: 'Nevadí, pokud zatím nemáš jasno. V prvním pololetí tě čekají exkurze, přednášky a ukázky z různých oblastí, které ti pomohou najít směr, který tě bude bavit.',
	},
	{
		question: 'Musím po celou dobu volit bloky z jednoho oboru?',
		answer: 'Nemusíš. Každé pololetí si volíš blok podle svého zájmu - můžeš zůstat u jednoho oboru, nebo je střídat mezi IT, elektrotechnikou a strojírenstvím.',
	},
	{
		question: 'Jak se bude hodnotit odborný blok?',
		answer: 'Na začátku si s vyučujícím nastavíš cíle. Průběžně dostáváš zpětnou vazbu a podporu. Hodnotí se, jak splníš domluvené cíle - důležitá je tvoje aktivita, samostatnost a pokrok ve zvoleném oboru.',
	},
	{
		question: 'Kolik času týdně zabere odborný blok?',
		answer: 'V prvním a druhém ročníku má odborný blok časovou dotaci 3 vyučovací hodiny. Ve třetím a čtvrtém ročníku se doba zvyšuje na 2 x 4 hodin týdně, což ti umožní se do tématu ponořit ještě hlouběji.',
	},
];

const SECOND_ACC_DATA = [
	{
		question: 'Co je to kompetenční rámec (KOR)?',
		answer: 'Je to předmět zaměřený na rozvoj dovedností důležitých pro život i práci - komunikace, spolupráce, řešení problémů, organizace času a emoční inteligence. Navíc je to prostor pro přípravu společných akcí.',
	},
	{
		question: 'Musím po škole na vysokou?',
		answer: 'Po dokončení technického lycea není povinností jít na vysokou školu. Během studia si vytváříš portfolio, které můžeš nabídnout zaměstnavatelům v technických oborech. Pokud se rozhodneš pro pokračování na vysoké škole, lyceum ti poskytne solidní základ pro studium zejména technických oborů.',
	},
	{
		question: 'Získám během studia licence pro používání odborného software?',
		answer: 'Ano, během studia budeš mít přístup k licencovanému software. Můžeš se tak seznámit s profesionálními nástroji používanými v oborech jako IT, strojírenství nebo elektrotechnika, a to i v rámci školních projektů.',
	},
	{
		question: 'Můžu si školu prohlédnout i mimo den otevřených dveří?',
		answer: 'Ano, pokud se nemůžeš zúčastnit dne otevřených dveří, rádi ti umožníme individuální prohlídku školy. Stačí se domluvit s vedením školy (PS), a my ti rádi ukážeme naše prostory a odpovíme na všechny tvoje dotazy.',
	},
	{
		question: 'Proč si vybrat technické lyceum místo gymnázia?',
		answer: 'Získáš všeobecné vzdělání jako na gymnáziu, ale už od začátku se budeš věnovat tomu, co tě zajímá – ať je to IT, strojírenství nebo elektrotechnika. Výuka směřuje k technice a moderním technologiím, pracuješ na projektech, poznáváš prostředí spolupracujících firem a lépe se připravíš na vysokou školu i budoucí práci.',
	},
];

const Faq = () => {
	return (
		<Flex pt={{ base: "15%", lg: "5%"}} direction="column" width="100%" bg="white" color="white" align="center">
			<Flex w="85%" minH="80vh" mb="2%" direction="column" gap={12}>
				<Flex direction="column" gap={9}>
					<Flex direction="column" color="black" gap={{ base: 3}}>
						<Heading fontFamily="ChakraPetch" fontWeight="bold" fontSize={{ base: "3.1rem", lg: "5rem", xl: "5rem"}}>
							OTÁZKY A ODPOVĚDI
						</Heading>
						<Text fontSize={{ base: "1.3rem", lg: "1.55rem"}} maxW={{ base: "100%", md: "70%", lg: '50%' }}>
							Zde najdeš ty nejčastější otázky a odpovědi na ně. Pokud nenajdeš to, co právě hledáš, neváhej se na nás
							obrátit!
						</Text>
					</Flex>
					<Flex w={{ base: "70%", md: '20%' }}>
						<Button w="100%" variant="solidBlue" as={Link} to="/#kontakt">
							Kontakt
						</Button>
					</Flex>
				</Flex>
				<Flex w="100%" gap={9} direction={{base: "column", xl: "row"}}>
					<Flex w={{ base: "100%", xl: "50%"}}>
						<CustomAccordion data={FIRST_ACC_DATA} />
					</Flex>
					<Flex w={{ base: "100%", xl: "50%"}}>
						<CustomAccordion data={SECOND_ACC_DATA} />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Faq;
