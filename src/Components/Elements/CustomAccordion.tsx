import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Text, Flex, StyleProps } from '@chakra-ui/react';
import CustomAccordionIcon from './CustomAccordionIcon';

export interface IAccordion {
	question: string;
	answer: string;
}

interface IProps {
	data: IAccordion[];
	styles?: StyleProps;
}

const CustomAccordion = ({ data, styles }: IProps) => {
	return (
		<Accordion minH="280px" w="100%" allowToggle color="black" {...styles}>
			{data.map((ac) => (
				<AccordionItem>
					{({ isExpanded }) => (
						<>
							<Text>
								<AccordionButton>
									<Box as="span" flex="1" textAlign="left">
										<Flex fontSize={{ base: "1rem", lg: "1.1rem"}}>
											<Text minW={{ base: "90px", md: "120px" }} fontWeight="bold">
												Otázka:
											</Text>
											<Text>{ac.question}</Text>
										</Flex>
									</Box>
									
									<CustomAccordionIcon isExpanded={isExpanded} />
								</AccordionButton>
							</Text>
							<AccordionPanel pb={4}>
								<Flex fontSize={{ base: "1rem", lg: "1.1rem"}} maxW={{ base: "100%", md: "80%"}}>
									<Text minW={{ base: "90px", md: "120px" }} fontWeight="bold">
										Odpověď:
									</Text>
									<Text>{ac.answer}</Text>
								</Flex>
							</AccordionPanel>
						</>
					)}
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default CustomAccordion;
