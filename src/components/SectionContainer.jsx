import { Box } from '@chakra-ui/react';

const SectionContainer = ({children, ...props}) => {
    return (
        <Box
            maxWidth="1000px"
            margin="0 auto"
            padding="20px"
            {...props}
        >
            {children}
        </Box>
    )
}

export default SectionContainer;