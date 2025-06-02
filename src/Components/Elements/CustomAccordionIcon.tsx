import { Image } from "@chakra-ui/react";
import { useMemo } from "react";
import rightArrow from "../../images/icons/accordion/arr-black.svg";
import downArrow from "../../images/icons/accordion/arr-blue.svg";

interface IProps {
    isExpanded: boolean;
}

const CustomAccordionIcon = ({ isExpanded }: IProps) => {
    const properIcon = useMemo(() => {
        if (isExpanded) return downArrow;
        return rightArrow;
    }, [isExpanded]);
    
    return (
        <Image 
            w="15px"
            height="auto"
            src={properIcon}  // Update the icon source based on the left alignment and accordion state
        />
    );
}

export default CustomAccordionIcon;
