import React from 'react'
import {
    Box, Flex, Stack, Button, Link,useColorModeValue, Tooltip
} from '@chakra-ui/react'
import { Search } from '../Recherche/Recherche'
import { FaBell } from 'react-icons/fa'
import MobileNavMenu from './MobileNavMenu'
import ColorModeToggle from '../../ColorModeToggle'

export default function MobileNav() {

    return (
        <>
            <Flex
                justify={'space-between'}
                align={'center'}
                px={'2rem'}
                py={'1rem'}
                borderBottomWidth={'1px'}
                borderColor={'gray.200'}
                display={{ base: "flex", lg: "none" }}
            >
                <Box>
                    <MobileNavMenu />
                </Box>
                <Stack direction={'row'} spacing={1}>
                    <Tooltip hasArrow label='Mon panier' bg='gray.300' color='black'>
                        <Link href='../admin/notifications'>
                            <Button bg={useColorModeValue('white', 'gray.700')}>
                                <FaBell fontSize={22} />
                            </Button>
                        </Link>
                    </Tooltip>
                    <ColorModeToggle />
                </Stack >
            </Flex >
            <Box
                px={'2rem'}
                py={'0.5rem'}
                mb={'1rem'}
                display={{ base: "block", lg: "none" }}
            >
                <Search />
            </Box>
        </>
    )
}