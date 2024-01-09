import {
  Flex, Heading, Link, Spacer, Stack, useColorModeValue,
  Menu, MenuButton, MenuList, MenuItem, Button,
} from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'

function DesktopNavbar() {

  return (
    <Flex
      overflowY={'auto'}
      justify={'space-between'}
      align={'center'}
      px={'6rem'}
      py={'0.5rem'}
      borderColor={'gray.200'}
      display={{ base: "none", lg: 'flex' }}
      boxShadow={'lg'}
    >
      <Stack
        direction={'row'}
        gap={6}
        flex={1}
        alignItems={'center'}
        justify={'space-between'}
      >
        <Flex>
          <Heading>
            <Link
              href='/'
              _hover={{ textDecor: "none", textColor: useColorModeValue("blue.400") }}
              fontWeight={'bold'}
              textColor={'gray.400'}
            >
              Yahe.
            </Link>
          </Heading>
        </Flex>
      </Stack>
      <Stack direction={'row'} spacing={8} justify={'center'} align={'center'} _hover={'none'}>
        <Flex >
          <Flex w={{ base: '100%', lg: '50%' }} flexDir={'row'}>
            <Link href='#banner' _hover={{ textDecor: "none", textColor: "blue.400" }} fontSize={15} textColor={'white'}>Accueil</Link>
          </Flex>
        </Flex>
        <Flex>
          <Flex w={{ base: '100%', lg: '100%' }}>
            <Link href='#apropos' _hover={{ textDecor: "none", textColor: "blue.400" }} fontSize={15} textColor={'white'}>À propos</Link>
          </Flex>
        </Flex>
        <Flex w={'20%'}>
          <Menu>
            <MenuButton as={Button} colorScheme='none' _hover={{ textColor: 'blue.400' }} color={useColorModeValue('black', 'white')} textColor={'white'}>
              Services<ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Web Design</MenuItem>
              <MenuItem>Développement App Mobile</MenuItem>
              <MenuItem>Maintenance logicielle</MenuItem>
              <MenuItem>Yahe Market (Indisponible)</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex>
          <Flex w={{ base: '100%', lg: '50%' }}>
            <Link href='#contacter' _hover={{ textDecor: "none", textColor: "blue.400" }} fontSize={15} textColor={'white'}>Contact</Link>
          </Flex>
        </Flex>
      </Stack>
      <Spacer />
    </Flex>
  )
}
export default DesktopNavbar
