import { Flex } from '@chakra-ui/react';
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
	);
}

export default Students;
