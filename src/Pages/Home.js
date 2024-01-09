import React from 'react'
import HomeBaner from './HomeComponents/HomeBaner'
import { Flex } from '@chakra-ui/react'
import Carte from './HomeComponents/Carte'
import TopFeatures from './HomeComponents/TopFeature'


//const ChakraNextImage = chakra(Image);


function Home() {
    return (
        <Flex flexDir={'column'}>
            <HomeBaner />
            <Carte />
            <TopFeatures/>
        </Flex>
    )
}

export default Home