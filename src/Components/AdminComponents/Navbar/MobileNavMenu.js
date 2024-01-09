import React from 'react'
import {
    Drawer, DrawerBody, DrawerContent, DrawerCloseButton, useDisclosure, Button,
    Text, Flex, Heading, Link, Box
} from '@chakra-ui/react'
import {
    BsBell, BsFillGearFill, BsPeopleFill
} from 'react-icons/bs'
import { VscListFlat } from 'react-icons/vsc'

export default function MobileNavMenu({ navSize }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box>
            <Flex flexDir={'row'} align={'center'} justify={'center'}>
                <Heading mr={4}>
                    <Button borderRadius={5} fontSize={'xl'} ref={btnRef} onClick={onOpen}>
                        <VscListFlat />
                    </Button>
                </Heading>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Flex
                            align={'flex-start'}
                            justify={''}
                            h={{ base: '120px', lg: '60px' }}
                            flexDir={{ base: 'column', sm: 'column', lg: 'row' }}
                        >
                            <Link href='/admin' _hover={{ cursor: 'pointer', color: 'gray.400', textDecor: 'none' }}>
                                <Flex
                                    align={'center'}
                                    fontSize={18}
                                    flexDir={'row'}
                                    p={'0.5rem'}
                                    borderRadius={5}

                                >
                                    <BsPeopleFill />
                                    <Text ml={2}>Gérer abonné(e)s</Text>
                                </Flex>
                            </Link>
                            <Link href='../admin/notifications' _hover={{ cursor: 'pointer', color: 'gray.400', textDecor: 'none' }}>
                                <Flex
                                    align={'center'}
                                    fontSize={18}
                                    flexDir={'row'}
                                    p={'0.5rem'}
                                    borderRadius={5}
                                >
                                    <BsBell />
                                    <Text ml={2}>Notifications</Text>
                                </Flex>
                            </Link>
                            <Link href='../admin/settings' _hover={{ cursor: 'pointer', color: 'gray.400', textDecor: 'none' }}>
                                <Flex
                                    align={'center'}
                                    fontSize={18}
                                    flexDir={'row'}
                                    p={'0.5rem'}
                                    borderRadius={5}
                                >
                                    <BsFillGearFill />
                                    <Text ml={2}>Paramètres</Text>
                                </Flex>
                            </Link>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}