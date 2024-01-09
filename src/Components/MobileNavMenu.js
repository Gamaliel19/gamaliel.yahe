import React from 'react'
import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, useDisclosure, Button, Link, Flex, Text, Heading, useColorModeValue,
} from '@chakra-ui/react'
import { VscListFlat } from 'react-icons/vsc'
import { BsBook, BsGearFill, BsHouse, BsPerson } from 'react-icons/bs'

export default function MobileNavMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} onClick={onOpen} bg={'gray.700'}>
                <VscListFlat color='white' />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerBody>
                        <Link href='#banner' _hover={{ cursor: 'pointer', textDecor: 'none' }} fontWeight={'bold'} >
                            <Flex
                                justify={'center'}
                                align={'center'}
                                fontSize={22}
                                flexDir={'row'}
                                _hover={{ bg: 'gray.200', borderRadius: '5' }}
                                p={'0.5rem'}
                            >
                                <BsHouse fontSize={30} />
                                <Text ml={2}>Accueil</Text>
                            </Flex>
                        </Link>
                        <Link href='#apropos' _hover={{ cursor: 'pointer', textDecor: 'none' }} fontWeight={'bold'} >
                            <Flex
                                justify={'center'}
                                align={'center'}
                                fontSize={22}
                                flexDir={'row'}
                                _hover={{ bg: 'gray.200', borderRadius: '5' }}
                                p={'0.5rem'}

                            >
                                <BsBook fontSize={30} />
                                <Text ml={2}>À propos</Text>
                            </Flex>
                        </Link>
                        <Link href='/' _hover={{ cursor: 'pointer', textDecor: 'none' }} fontWeight={'bold'} >
                            <Flex
                                justify={'center'}
                                align={'center'}
                                fontSize={22}
                                flexDir={'row'}
                                _hover={{ bg: 'gray.200', borderRadius: '5' }}
                                p={'0.5rem'}
                            >
                                <BsGearFill fontSize={30} />
                                <Text ml={2}>Services</Text>
                            </Flex>
                        </Link>
                        <Link href='#contact' _hover={{ cursor: 'pointer', textDecor: 'none' }} fontWeight={'bold'} >
                            <Flex
                                justify={'center'}
                                align={'center'}
                                fontSize={22}
                                flexDir={'row'}
                                _hover={{ bg: 'gray.200', borderRadius: '5' }}
                                p={'0.5rem'}
                            >
                                <BsPerson fontSize={30} />
                                <Text ml={2}>Contact</Text>
                            </Flex>
                        </Link>

                    </DrawerBody>
                    <DrawerFooter>
                        <Button borderRadius={5} variant={'outline'} mr={3} onClick={onClose}>
                            Fermer
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}