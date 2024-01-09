import React from 'react'
import {
    Button,
    Flex,
    Link,
    Spacer,
    Stack,
} from '@chakra-ui/react'
import { FaBell } from "react-icons/fa"
import { Search } from '../Recherche/Recherche'
import ColorModeToggle from '../../ColorModeToggle'
import MobileNavMenu from './MobileNavMenu'

export default function DesktopNav() {

    return (
        <Flex
            justify={'space-between'}
            align={'center'}
            px={'2rem'}
            py={'1rem'}
            borderBottomWidth={'1px'}
            borderColor={'gray.200'}
            display={{ base: "none", lg: "flex" }}
        >
            <Stack
                direction={'row'}
                gap={6}
                flex={1}
            >
                <MobileNavMenu />
            </Stack>
            <Spacer />
            <Stack
                direction={'row'}
                justify={'space-between'} align={'center'}
            >
                <Search />
                <Flex w={{ base: '100%', lg: '50%' }}>
                    <Link href='../admin/notifications' borderRadius={5}>
                        <Button bg={'transparent'}>
                            <FaBell fontSize={20} />
                        </Button>
                    </Link>
                </Flex>
                <ColorModeToggle />
            </Stack>
        </Flex>
    )
}