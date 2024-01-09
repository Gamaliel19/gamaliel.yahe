import React, { useEffect, useState } from 'react'
import {
  Box, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue
} from '@chakra-ui/react'


function Settings() {
  const [name, setName] = useState('Gérer les notifications')
  useEffect(() => {
    function updateTitle() {
      document.title = name
    }
    updateTitle()
  })

  return (
    <Flex
      flexDir={'column'}
      mt={{ base: '4rem', lg: '0' }}
      minHeight={'100vh'}
      bg={useColorModeValue('white', 'gray.700')}
      align={'center'}
    >
      <Stack
        align={'center'}
        justify={'center'}
      >
        <Box>
          <Heading mt={5} fontSize={20}>Paramètres</Heading>
        </Box>
      </Stack>

      <Stack ml={5} mt={5} mr={'1rem'}>
        <Flex flexDir={'column'} w={'100%'}>
          <Flex display={{ base: 'none', lg: 'flex' }}>
          </Flex>
          <Tabs>
            <TabList justifyItems={'center'} alignItems={'center'} w={{ base: '100%', lg: '90%' }} flexDir={{ base: 'column', lg: 'row' }}>
              <Tab>Taille de police</Tab>
              <Tab>Langue</Tab>
              <Tab>À propos</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>Yeah yeah. Ici c'est le paramètre1</p>
              </TabPanel>

              <TabPanel>
                <p>Yeah yeah. Ici c'est le paramètre2</p>
              </TabPanel>

              <TabPanel>
                <p>Yeah yeah. Ici c'est le paramètre3.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Stack>

    </Flex>
  )
}

export default Settings
