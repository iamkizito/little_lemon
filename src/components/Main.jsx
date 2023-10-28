import { Box } from '@chakra-ui/react';

const Main = ({children, ...props}) => {
    return (
        <Box as="main"
            flex={1}
            {...props}
        >
            {children}
        </Box>
    )
}

export default Main;