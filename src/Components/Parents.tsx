import { Flex } from '@chakra-ui/react';
import Application from './Sections/Application';
import OpenDoors from './Sections/OpenDoors';
import Footer from './Sections/Footer';
import { Element } from 'react-scroll';
import ParentsLanding from './Sections/ParentsLanding';
import Future from './Sections/Future';
import Profession from './Sections/Profession';
import Portfolio from './Sections/Portfolio';
import MapSection from './Sections/MapSection';
import Organisation from './Sections/Organisation';
import { Helmet } from 'react-helmet';

function Parents() {
	window.scrollTo(0,0);
	return (
		<>
			<Helmet>
				<title>Pro rodiče | Technické lyceum Hradec Králové</title>
				<meta name="description" content="Spojení gymnaziálního základu s technickou praxí. TLHK připravuje žáky na vysokou školu i uplatnění v praxi."/>
				<meta name="keywords" content="rodiče, střední škola, technické lyceum, příprava na vysokou školu, vzdělávání, budoucnost, uplatnění, odpovědnost"/>
				<link rel="canonical" href="https://tlhk.cz/pro-rodice"/>
			</Helmet>
			<Flex direction="column" alignItems="center">
				<Element style={{ width: "100%" }} id="rodice-landing" name="rodice-landing">
					<ParentsLanding />
				</Element>
				<Element style={{width: "100%"}} id="budoucnost" name="budoucnost">
					<Future />
				</Element>
				<Element style={{width: "100%"}} id="profese" name="profese">
					<Profession />
				</Element>
				<Element style={{width: "100%"}} id="portfolio" name="portfolio">
					<Portfolio />
				</Element>
				<Element style={{ width: "100%" }} id="prihlaska" name="prihlaska">
					<Application />
				</Element>
				<Element style={{ width: "100%" }} id="organizace" name="organizace">
					<Organisation />
				</Element>
				<OpenDoors styles={{bg: "primary.purple", borderColor: "primary.purple"}}/>
				<MapSection />
				<Footer color="rgba(130, 84, 162, 1)" />
			</Flex>
		</>
	);
}

export default Parents;
