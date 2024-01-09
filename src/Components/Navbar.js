import React from 'react'
import DesktopNavbar from './DesktopNavBar';
import MobileNavbar from './MobileNavbar';
import { Box, useColorModeValue } from '@chakra-ui/react';

function Navbar() {
    return (
        <Box h={'120px'}>
            <Box
                position={'fixed'}
                bg={useColorModeValue('transparent', 'gray.700')}
                w={'100%'}
                mb={'1rem'}
                zIndex={10}
                fontWeight={'bold'}
            >
                <DesktopNavbar />
                <MobileNavbar />
            </Box>
        </Box>
    )
}
export default Navbar