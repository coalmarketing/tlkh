import { Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import StudentsLanding from './Sections/StudentsLanding';
import Await from './Sections/Await';
import Application from './Sections/Application';
import OpenDoors from './Sections/OpenDoors';
import Timeline from './Sections/Timeline';
import Footer from './Sections/Footer';
import { Element } from 'react-scroll';
import Activities from './Sections/Activities';
import Software from './Sections/Software';
import Map from './Elements/Map';

function Students() {
	window.scrollTo(0,0);

	return (
		<>
			<Helmet>
				<title>Pro studenty | Technické lyceum Hradec Králové</title>
				<meta name="description" content="Flexibilní rozvrh, odborné bloky, portfolio a stáže. V TLHK si student tvoří vlastní vzdělávací cestu."/>
				<meta name="keywords" content="studenti, TLHK, rozvrh, odborné bloky, střední škola, portfolio, závěrečná práce, mimoškolní aktivity, software pro studenty"/>
				<link rel="canonical" href="https://tlhk.cz/pro-studenty"/>
			</Helmet>
			<Flex direction="column" alignItems="center">
				<Element style={{ width: "100%" }} id="studenti-landing" name="studenti-landing">
					<StudentsLanding />
				</Element>
				<Element style={{ width: "100%" }} id="co-ocekavat" name="co-ocekavat">
					<Await />
				</Element>
				<Element  style={{ width: "100%" }} id="odborne-bloky" name="odborne-bloky">
					<Timeline />
				</Element>
				<Element style={{ width: "100%" }} id="prihlaska" name="prihlaska">
					<Application wantMoreButtonHidden={true}/>
				</Element>
				<Element style={{ width: "100%" }} name="aktivity" id="aktivity" >
					<Activities />
				</Element>
				<Element style={{ width: "100%" }} name="software" id="software" >
					<Software />
				</Element>
				<OpenDoors />
				<Map />
				<Footer color="rgba(62, 166, 222)" />
			</Flex>
		</>
	);
}

export default Students;
