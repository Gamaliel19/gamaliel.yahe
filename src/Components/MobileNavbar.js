import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import ColorModeToggle from './ColorModeToggle'
import MobileNavMenu from './MobileNavMenu'

function MobileNavbar() {
  return (
    <>
      <Flex
        justify={'space-between'}
        align={'center'}
        px={'2.5rem'}
        py={'1rem'}
        borderBottomWidth={'1px'}
        borderColor={'gray.200'}
        display={{ base: "flex", lg: "none" }}
      >
        <Box>
          <MobileNavMenu />
        </Box>
      </Flex >
    </>
  )
}
export default MobileNavbar