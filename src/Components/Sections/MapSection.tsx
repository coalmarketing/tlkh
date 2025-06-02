import { Flex } from "@chakra-ui/react";
import Map from "../Elements/Map";

const MapSection = () => {
    return (
        <Flex
			direction="column"
			width="100%"
			color="white"
			align="center"
			justify="center"
			h="30vh"
		>
			<Map />
		</Flex>
    )
}


export default MapSection;