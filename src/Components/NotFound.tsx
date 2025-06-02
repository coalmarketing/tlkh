import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<Flex w="100vw" h="100vh" justify="center" align="center" direction="column" gap={3}>
			<Text>Stránka nebyla nalezena.</Text>
			<Button as={Link} to="/" variant="solidPurple" borderRadius={5}>Domů</Button>
		</Flex>
	)
}

export default NotFound;
