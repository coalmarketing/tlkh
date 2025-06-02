import { Flex } from '@chakra-ui/react';
import LandingSection from './Sections/LandingSection';
import Students from './Sections/Students';
import JoinUs from './Sections/JoinUs';
import Parents from './Sections/Parents';
import Application from './Sections/Application';
import MapSection from './Sections/MapSection';
import Offer from './Sections/Offer';
import Footer from './Sections/Footer';
import { Element } from 'react-scroll';
import StudyFields from './Sections/StudyFields';
// import Absolvents from './Sections/Absolvents';
import Faq from './Sections/Faq';

function Home() {
	return (
		<Flex direction="column" alignItems="center">
			<Element style={{ width: "100%" }} id="landing" name="landing">
				<LandingSection />
			</Element>

			<Element style={{ width: "100%" }} id="studenti" name="studenti">
				<Students />
			</Element>

			<JoinUs />

			<Element style={{ width: "100%" }} id="rodice" name="rodice">
				<Parents />
			</Element>

			<Element style={{ width: "100%" }} id="oblasti-studia" name="oblasti-studia">
				<StudyFields />
			</Element>

			<Element style={{ width: "100%" }} id="o-studiu" name="o-studiu">
				<Offer />
			</Element>
			<Element style={{ width: "100%" }} name="faq" id="faq">
				<Faq />
			</Element>

			{ /* 
				<Element style={{ width: "100%" }} id="absolventi" name="absolventi">
					<Absolvents />
				</Element>
			*/}

			<Application />

			<MapSection />
			
			<Footer color="#F78F31" />
		</Flex>
	);
}

export default Home;
